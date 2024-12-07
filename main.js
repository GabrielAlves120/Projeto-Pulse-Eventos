document.addEventListener(
    //Garante que carrega todo o HTML antes de executar o JS
    "DOMContentLoaded",
    function(){
        //Seleciona o elemento <menu> do HTMLL pelo nome do elemento
        const menu = document.querySelector("menu");
        //Obtém a distância em PX entre o topo da página e o meu menu
        const topo = menu.offsetTop;
        window.addEventListener("scroll", function(){
            const posicaoScroll = document.documentElement.scrollTop || document.body.scrollTop;
            
            //Criando uma condicional
            //Se a posição do scroll for maior ou igual ao topo da página
            if(posicaoScroll >= topo){
                //Fixo o meu menu
                menu.classList.add("fixed");
                //Senão
            }else{
                //Remove a propriedade de fixar o menu no topo da página
                menu.classList.remove("fixed");
            }
        });
    }
);