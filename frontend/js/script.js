const PORT = 4000

const findPj = async () => {
    try{
        const pjName = document.getElementById("pjName").value.toLowerCase()
        const info = document.getElementById("info")
        const url = `http://localhost:${PORT}/characters/${pjName}`
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        const template = data.map(pj => {
            const templateList = 
             `
                 <h2>${pj.name}</h2>
                 <img src="${pj.image}" alt="${pj.name}"
                 <ul>
                     <li>Estado: ${pj.status}</li>
                     <li>Especie: ${pj.species}</li>
                     <li>Genero: ${pj.gender}</li>
                     <li>Origen: ${pj.origin}</li>
                 </ul>
             `
             return templateList
        }).join("")
        console.log(template)
        info.innerHTML = template
    }
    catch(error){
        console.log("No ha sido posible conseguir la informacion")
    }
}