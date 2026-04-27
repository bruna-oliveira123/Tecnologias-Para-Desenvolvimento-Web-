var numeroVezes;
var numeroVezesAnterior = 0;
var moda = 0;
var vetor = [5, 5, 2, 3, 1, 3, 8];
var empate = false;

for (var i = 0; i < vetor.length; i++) {
    numeroVezes = 0; // Reinicia a contagem para o novo número
    for (var j = 0; j < vetor.length; j++) {
        if (vetor[i] == vetor[j]) {
            numeroVezes++;
        }
    }

    if (numeroVezes > numeroVezesAnterior) {
        moda = vetor[i];
        numeroVezesAnterior = numeroVezes;
        empate = false; 
    } else if (numeroVezes == numeroVezesAnterior && vetor[i] != moda) {
        empate = true;
    }
}

if (empate || numeroVezesAnterior <= 1) {
    console.log("Não há moda.");
} else {
    console.log("Moda: " + moda);
}