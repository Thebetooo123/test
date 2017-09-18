let personauno = 0;
let personados = 0;

const MayorDeEdad = 25;
const MenorDeEdad = 10;
const ClasificacionB = 15;
const ClasificacionC = 18;

const calcularEdad = () => Math.round(Math.random() * (MayorDeEdad - MenorDeEdad) + MenorDeEdad);

personauno = calcularEdad();
personados = calcularEdad();

if (personauno >= ClasificacionC){
    console.log(`Pepe puede entrar a ver logan porque tiene ${personauno} años`);
}else{
    if(personados >= ClasificacionC && personauno >=ClasificacionB){
        console.log(`Pepe puede entrar a ver logan porque va acompañado de pepa, y pepa tiene ${personados} años`);
    }else{
        if(personados <= ClasificacionB){
            console.log(`Pepe no puede entrar a ver logan porque el y pepa tienen ${personauno} y ${personados} años respectivamente`);
        }else{
            console.log(`Pepe y pepa solo pueden entrar a ver minions por que son menores de 15 años y no van con un adulto`)
        }
    }
}
