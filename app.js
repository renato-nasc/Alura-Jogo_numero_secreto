dificuldade = 10 ;
let tentativas = 1;
let listaNumerosSorteados = []; 
let numeroSecreto = gerarNumeroAleatorio();
mensagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1});
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
    }

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        console.log(listaNumerosSorteados);
    
    } else{
        if(chute < numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é maior que '+ chute);
        }else{
            exibirTextoNaTela('p', 'O número secreto é menor que ' + chute);
           
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * dificuldade +1);
    let qtdElementosLista = listaNumerosSorteados.length;

    if(qtdElementosLista == dificuldade){
        listaNumerosSorteados = [];
    }
    
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(dificuldade);
    } else{
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;        
    }
}


