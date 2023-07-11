/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   /*let arreglo = Object.entries(objeto);
   return arreglo;*/
   let arrayPadre = [];
   for(let i in objeto){
      let arrayHijo = [];
      arrayHijo.push(i);
      arrayHijo.push(objeto[i]);
      arrayPadre.push(arrayHijo);
   }
   return arrayPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto = {};
   let arreglo = string.split("").sort();
   for (let i of arreglo){
      let cantidad = objeto[i] || 0;
      objeto[i] = cantidad + 1;
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var stringMin = '';
   var stringMay = '';
   for(let i of string){
      if(i === i.toUpperCase()){
         stringMay += i;
      }else{
         stringMin += i;
      }
   }
   return (stringMay + stringMin);
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let resultado = [];
   let palabras = frase.split(" ");
   for (let i = 0;i < palabras.length;i++){
      let invertida = palabras[i].split("").reverse().join("");
      resultado.push(invertida);
   }
   return resultado.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let invertido = numero.toString().split("").reverse().join("");
   invertido = parseInt(invertido);
   if(invertido === numero){
      return ("Es capicua");
   }else{
      return ("No es capicua");
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   
   let nuevoString = '';
   for (let i = 0; i < string.length;i++){
      let letra = string[i]
      if((string[i] !== 'a')&&(string[i] !== 'b')&&(string[i] !== 'c')){
         nuevoString += string[i];
      }
   }
   return nuevoString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   /*let arregloOrdenado = [];
   for (let i = 0;i < arrayOfStrings.length;i++){
      let min = Infinity;
      let aux;
      for(let j = 0;j < arrayOfStrings.length;j++){
         if(min > arrayOfStrings[j].length && !arregloOrdenado.includes(arrayOfStrings[j])){
            min = arrayOfStrings[j].length;
            aux = j;
         }
      }
      arregloOrdenado.push(arrayOfStrings[aux]);
   }
   return arregloOrdenado;*/
   return arrayOfStrings.sort((a,b) => a.length - b.length);
}


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arregloMutuo = [];
   for (let i = 0;i < array2.length;i++){
      // for(let j = 0;j < array2.length;j++){
      //    if((array1[i] === array2[j]) && (!arregloMutuo.includes(array1[i]))){
      //       arregloMutuo.push(array1[i]);
      //    }
      // }
      if(array1.includes(array2[i])){
         arregloMutuo.push(array2[i]);
      }  
   }
   return arregloMutuo;
}
/*let a1 = [6,4,0,5,5];
let a2 = [2,1,3,3];
console.log(buscoInterseccion(a1,a2))*/

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
