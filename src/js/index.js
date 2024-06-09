/* OBJETIVO: Mostrar o próximo cartão quando clicar no botão de avançar.
Passo 1: Identificar o elemento do botão de avancar no HTML*
Passo 2: Identificar o click do usuário
Passo 3: Mostrar o próximo cartão
Passo 4: Esconder o cartão anterior
Passo 5: Identificar o elemento do botão de voltar no HTML
Passo 6: Identificar o click do usuário
Passo 7: Mostrar o cartão anterior
Passo 8: Esconder o cartão anterior */

const btnAvancar = document.getElementById("btn-avancar");                  //Passo 1: Identificar o elemento do botão de avancar no HTML
const btnVoltar = document.getElementById("btn-voltar");                    //Passo 5: Identificar o elemento do botão de voltar no HTML
let cartaoAtual = 0;                                                        //Passo 3: Mostrar o próximo cartão
const cartoes = document.querySelectorAll (".cartao");                      //Passo 3: Mostrar o próximo cartão

btnAvancar.addEventListener("click", function (){                           //Passo 2: Identificar o click do usuário
   // console.log("cliquei"); - retirou, era um dos Passo 2: Identificar o click do usuário
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;              //explica o comando abaixo
   if(ehUltimoCartao) return;                                               //Passo 4: Esconder o cartão anterio

   esconderCartaoSelecionado();                                             // REFATORADO Passo 4

    cartaoAtual++;                                                          //Passo 3: Mostrar o próximo cartão
    mostrarCartao();                                                        //REFATORADO PASSO 3

});

btnVoltar.addEventListener("click", function (){                            //Passo 6: Identificar o click do usuário
    const ehPrimeiroCartao = cartaoAtual === 0;                             // explica o comando abaixo
    if(ehPrimeiroCartao) return;                                            //Passo 8: Esconder o cartão anterior

    esconderCartaoSelecionado();                                            // REFATORADO Passo 4

    cartaoAtual--;                                                          //Passo 7: Mostrar o cartão anterior
    mostrarCartao();                                                        //REFATORADO PASSO 3

});

function mostrarCartao() {                                                  //Passo 3: Mostrar o próximo cartão
    cartoes[cartaoAtual].classList.add("selecionado");                      //Passo 3: Mostrar o próximo cartão
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");       //Passo 4: Esconder o cartão anterior
    cartaoSelecionado.classList.remove("selecionado");                      //Passo 4: Esconder o cartão anterio
}
