
function clacular(peso, altura){
    return peso/Math.pow(altura, 2);
}
function classificarImc(imc){
    if(imc < 18.5){
        return 'Abaixo do Peso';
    } else if(imc >= 18.5 && imc < 25){
        return 'Peso Normal';
    }else if(imc >= 25 && imc < 30){
        return 'Acima do Peso';
    }else if(imc >= 30 && imc < 40){
        return 'Obeso';  
    }else{
        return 'Obsidade Grave';
    }
}

function main(){
    const peso = 75;
    const altura = 1.75;
    
    const imc = clacular(peso, altura);
    console.log(classificarImc(imc));
}
main();