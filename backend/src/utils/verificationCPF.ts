  
  export function verificationCPF(cpf:string){
    let cpfFormated= cpf.replace(/[^a-z0-9]/gi,'');
    let cpfArray = cpfFormated.split("");
    let cpfVerification = cpfFormated.split("").slice(0,cpfFormated.length - 2);
    let tam = cpfFormated.split("").slice(0,cpfFormated.length - 2).length;

    let verificaNumIguais:boolean = true;

    for(let i=0;i<cpfArray.length;i++){
        if(cpfArray[i] !== cpfArray[0]){
            verificaNumIguais=false;
        }
    }

    if(verificaNumIguais === true){
        return false
    }

    while(tam<cpfArray.length){
        let soma = 0;
        for(let i=tam + 1;i>1;i--){
            soma = soma + (i * parseInt(cpfVerification[ tam + 1 - i]));
        }
        let resto = soma % 11;
        let calSub = 11-resto;

        if(calSub<10){
            cpfVerification.push(calSub.toString());
        }else{
            cpfVerification.push('0');
        }
        
        tam=tam+1;
    }

    if(cpfArray.toString() === cpfVerification.toString()){
        return true;
    }

    return false;
}

  
  