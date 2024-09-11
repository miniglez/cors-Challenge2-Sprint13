const express = require("express")
const app = express()
const PORT = 4000

const axios = require("axios")
const cors = require("cors")

app.use(cors())

app.get("/characters", async (req, res) => {
    const url = "https://rickandmortyapi.com/api/character"
    try{
        const response = await axios.get(url)
        const data = response.data.results
        const myData = []
        for(i in data){
            const character = {
                name: data[i].name,
                status: data[i].status,
                species: data[i].species,
                gender: data[i].gender,
                origin: data[i].origin.name,
                image: data[i].image
            }
            myData.push(character)
        }
        res.json(myData)
    }
    catch(error){
        res.status(404).json({error: "Datos no encontrados"})
        console.log("Error " + error)
    }
})

app.get("/characters/:name", async (req, res) => {
    const name = req.params.name
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`
    const response = await axios.get(url)
    const data = response.data.results

    const myData = []
    for(i in data){
        const character = {
            name: data[i].name,
            status: data[i].status,
            species: data[i].species,
            gender: data[i].gender,
            origin: data[i].origin.name,
            image: data[i].image
        }
        myData.push(character)
    }
    res.json(myData)
})

app.listen(PORT, () => {
    console.log(`Servidor escucha en http://localhost:${PORT}`)
})