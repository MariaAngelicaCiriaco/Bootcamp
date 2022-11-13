const {gets, print} = require ('./maiorNumero');

const quantidadeNum = gets();
let maiorNum = 0;

for (let i = 0; i < quantidadeNum; i++) {
    const numSorteado = gets();
    if (numSorteado > maiorNum) {
        maiorNum = numSorteado;
    } 
}

print(maiorNum);

