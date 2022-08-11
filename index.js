const express = require('express')
const axios = require('axios').default;
const cors =require('cors')

const app = express()
app.use(cors());

const port = 3000

app.get('/direction', async (req, res) => {
    try {
        const { destination, origin } = req.query;
        const endpoint =
            `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=GOOGLE_API_KEY`;

        const result = await axios.get(endpoint);

        res.send(result.data)
    } catch (error) {
        console.log(error)
    }
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${port}`)
})