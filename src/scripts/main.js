document.addEventListener('DOMContentLoaded',function(){
    const buttons=document.querySelectorAll('[data-tab-button]');
    const question=document.querySelectorAll('[data-faq-question]');
    const hero= document.querySelector('.hero');
    const  alturahero= hero.clientHeight
    window.addEventListener('scroll',function(){
     const posiatual= window.scrollY;
     if(posiatual<alturahero){
        ocultaElemento();
     }
     else{
        exbibeElemento();
     }
    })
   //seção de atraçoões,programação das abas
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',function(botao){
            const abaAlvo=botao.target.dataset.tabButton;
            const aba=document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeAbas();
            aba.classList.add('shows__list--is-active');
            removebotaoativo();
            botao.target.classList.add('shows__tabs__button--is-active')
         
        }) 

    }
    //seção faq acordion
    for(let i=0;i<question.length;i++){
        question[i].addEventListener('click',abrefecharesp)
    }
})
function ocultaElemento(){
    const header=document.querySelector('header');
    header.classList.remove('header--is-hidden')

}
function exbibeElemento(){
    const header=document.querySelector('.header');
    header.classList.add('header--is-hidden')
}

function abrefecharesp(elemento){
   const classe='faq__questions__item--is-open';
  console.log(elemento)
  const elementoPai= elemento.target.parentNode;
  elementoPai.classList.toggle(classe);

}
function removebotaoativo(){
    const buttons=document.querySelectorAll('[data-tab-button]');
    for(let i=0;i<buttons.length;i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }

}
function escondeAbas(){
    const tabsContainer =document.querySelectorAll('[data-tab-id]');
    for(let i=0;i<tabsContainer.length;i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }

}