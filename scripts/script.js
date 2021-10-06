// JavaScript Document
let buttonHamburgermenuGebruikers = document.querySelector(".gebruikersmenu > button");
const HamburgermenuStreep1 = document.querySelector(".gebruikersmenu > button img:first-of-type");
const HamburgermenuStreep2 = document.querySelector(".gebruikersmenu > button img:nth-of-type(2)");
const HamburgermenuStreep3 = document.querySelector(".gebruikersmenu > button img:nth-of-type(3)");
const Gebruikersmenu = document.querySelector(".gebruikersmenu ul"); 
const ButtonNavComputer = document.querySelector(".NavComputer");
const NavComputer = document.querySelector(".NavComputer nav");
const ButtonPlaystation = document.querySelector(".NavPlaystation");
const NavPlaystation = document.querySelector(".NavPlaystation nav");
const ButtonNavXbox = document.querySelector(".NavXbox");
const NavXbox = document.querySelector(".NavXbox nav");
const ButtonNavNintendo = document.querySelector(".NavNintendo");
const NavNintendo = document.querySelector(".NavNintendo nav");

buttonHamburgermenuGebruikers.addEventListener("click",openGebruikersmenu);
ButtonNavComputer.addEventListener("click",openPCmenu);

buttonHamburgermenuGebruikers = 0;

function openGebruikersmenu(){
    if (buttonHamburgermenuGebruikers == 0){
        Gebruikersmenu.classList.remove("hidden");
        HamburgermenuStreep2.style.opacity = "0";
        HamburgermenuStreep3.classList.add("open");
        HamburgermenuStreep1.classList.add("open");
        buttonHamburgermenuGebruikers = 1;
    } else if (buttonHamburgermenuGebruikers == 1){
        Gebruikersmenu.classList.add("hidden");
        HamburgermenuStreep2.style.opacity = "1";
        HamburgermenuStreep3.classList.remove("open");
        HamburgermenuStreep3.classList.add("closed");
        HamburgermenuStreep1.classList.remove("open");
        HamburgermenuStreep1.classList.add("closed");
        buttonHamburgermenuGebruikers = 2;
    } else {
        Gebruikersmenu.classList.remove("hidden");
        HamburgermenuStreep2.style.opacity = "0";
        HamburgermenuStreep3.classList.add("open");
        HamburgermenuStreep3.classList.remove("closed");
        HamburgermenuStreep1.classList.add("open");
        HamburgermenuStreep1.classList.remove("closed");
        buttonHamburgermenuGebruikers = 1;
    }
};

function openPCmenu(){
    NavComputer.classList.toggle("hidden");
}



const SpelafbeeldingDisplay = document.querySelector(".detail section:nth-of-type(3) article > img:first-of-type");

const KnopAfbeeldingOptie1 = document.querySelector(".Afbeelding1");
const KnopAfbeeldingOptie2 = document.querySelector(".Afbeelding2");
const KnopAfbeeldingOptie3 = document.querySelector(".Afbeelding3");
const KnopAfbeeldingOptie4 = document.querySelector(".Afbeelding4");
const KnopAfbeeldingOptie5 = document.querySelector(".Afbeelding5");

if(KnopAfbeeldingOptie1){
    KnopAfbeeldingOptie1.addEventListener("click",OpenAfbeelding1);
    function OpenAfbeelding1(){
        SpelafbeeldingDisplay.src = "images/content/spel-rockstar-red-dead-redemption-2-standard-edition-wallpaper-1.jpg";
    }
}

if(KnopAfbeeldingOptie2){
    KnopAfbeeldingOptie2.addEventListener("click",OpenAfbeelding2);
    function OpenAfbeelding2(){
        SpelafbeeldingDisplay.src = "images/content/spel-rockstar-red-dead-redemption-2-standard-edition-wallpaper-2.jpg";
    }
}

if(KnopAfbeeldingOptie3){
    KnopAfbeeldingOptie3.addEventListener("click",OpenAfbeelding3);
    function OpenAfbeelding3(){
        SpelafbeeldingDisplay.src = "images/content/spel-rockstar-red-dead-redemption-2-standard-edition-wallpaper-3.jpg";
    }
}

if(KnopAfbeeldingOptie4){
    KnopAfbeeldingOptie4.addEventListener("click",OpenAfbeelding4);
    function OpenAfbeelding4(){
        SpelafbeeldingDisplay.src = "images/content/spel-rockstar-red-dead-redemption-2-standard-edition-wallpaper-4.jpg";
    }
}

if(KnopAfbeeldingOptie5){
    KnopAfbeeldingOptie5.addEventListener("click",OpenAfbeelding5);
    function OpenAfbeelding5(){
        SpelafbeeldingDisplay.src = "images/content/spel-rockstar-red-dead-redemption-2-standard-edition-wallpaper-5.jpg";
    }
}










