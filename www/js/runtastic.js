const nombre = "Alberto"

const dias =[
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
]

function promedioCorrer(){
    const min = 5
    const max = 15

    return Math.round(Math.random()* (max - min) + min)
}

let totalkms = 0
const length = dias.length
for(let i = 0; i<length; i++){
    const kms = promedioCorrer()
    totalkms += kms
    console.log(`El día ${dias[i]}, ${nombre} corrio ${kms} kms`);
}

const promediokms = totalkms / length
console.log(`En promedio, ${nombre} corrio ${promediokms.toFixed(2)} kms, en la semana`)