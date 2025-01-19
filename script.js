$(document).ready(function(){
    var elementsDuMenu = $("#menu-principale ul").children("li"),
    
    elementsTotalDansMenu = elementsDuMenu.length,
    indexElementOuvert = 2,

    
    init = function(){
bindEvents();
if(valideIndex(indexElementOuvert))
{
    animeElement(elementsDuMenu.eq(indexElementOuvert), true, 700);
}
    },

bindEvents = function()
{
    elementsDuMenu.children(".images").click(function(){
        var newIndex = $(this).parent().index();
        checkAndAnimateElement (newIndex);
        
                });

                $(".bouton").hover(
                    function(){
                $(this).addClass("hoverRed");

                },
                function (){
                    $(this).removeClass("hoverRed");
                }
);

$(".bouton").click(function(){
    var newIndex = $(this).index();
    checkAndAnimateElement (newIndex);

});
},

    valideIndex = function(indexToCheck){

    return (indexToCheck >= 0) && (indexToCheck < elementsTotalDansMenu);

    },
    
    animeElement = function(element, toOpen,speed ){

       var imageCouleur = element.find(".couleur"),
       elementParametre = toOpen ? {width:"420px"}: {width: "140px"},
       imageCouleurParametre = toOpen? {left: "0px"}: {left: "140px"};

        imageCouleur.animate(imageCouleurParametre,speed);
        element.animate(elementParametre, speed);
        
    },

    checkAndAnimateElement = function(indexCheckAndAnimate){
        if(indexElementOuvert === indexCheckAndAnimate)
        {
        animeElement(elementsDuMenu.eq(indexCheckAndAnimate), false, 250);
        indexElementOuvert = -1;
        }
        else
        {
        if (valideIndex(indexCheckAndAnimate))
        {animeElement(elementsDuMenu.eq(indexElementOuvert),false,250);
        indexElementOuvert = indexCheckAndAnimate;
        animeElement(elementsDuMenu.eq(indexElementOuvert),true,250);
        }
        }
        


    }

    ;

init();



});