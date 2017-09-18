//si la palabra termina en "ar", se le quitan los //dos ultimos caracteres
function platzom(str){
    let translation = str;

    if(str.toLowerCase().endsWith('ar')){
        translation = str.slice(0,-2);
    }
    /*-si la palabra inicia con z, se le añade "pe" al final de la palabra*/

    if(str.toLowerCase().startsWith('z')){
        translation += 'pe';
    }
    /*-si la palabra traducida tiene 10 o mas letras se debe
    partir a la mitad y unir con un guion */
    let l = str.length;
    if(l>=10){
        let fHalf = translation.substring(0, Math.round(l/2));
        let sHalf = translation.substring(Math.round(l/2),l);
        translation = `${fHalf}-${sHalf}`;
    }
    /* si la palabra original es un palindromo,
    ninguna de las anteriores reglas funciona, y se devuelve la palabra intercalando
    entre mayusculas y minusculas*/

    const reverse = (str) => str.split('').reverse().jon('');
    function minMay(str){
        const l = str.length;
        let translation = "";
        let capitalize = true;
        for(let i = 0;i < l; i++){
            const char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
        }
    }

    if(str = reverse(str)){
        return minMay(str);
    }

    return translation

}

console.log(platzom("contar"));
console.log(platzom("Zorro"));
console.log(platzom("UnicornioRosado"));





