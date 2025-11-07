/*
    Que quiero conseguir?
    Quiero comparar dos arrays para saber en cuantos puntos son iguales y luego dar una calificación basada en las similitudes 
    A: Son las respuestas dadas por el usuario
    B: Son las respuestas correctas 
*/

const userAnswers = ["a","b","c","a"];
const correctAnswers = ["b","b","c","c"];

function TotalScore (a,b){
    let score = 0;
    for(let i=0;i<a.length;i++){
        if(a[i]===b[i]){
            score++;
        }
    }
    let note = (score/b.length)*10
    return note.toFixed(1);
}

let calculoFinal = TotalScore(userAnswers, correctAnswers)
console.log(`La nota final es: ${calculoFinal}/10`);