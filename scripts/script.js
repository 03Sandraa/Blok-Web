// JavaScript Document
const Body = document.querySelector("body");
const buttonHamburgermenuGebruikers = document.querySelector(".gebruikersmenu > button");
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

HamburgermenuStatus = 0;

function openGebruikersmenu(){
    if (HamburgermenuStatus == 0){
        Gebruikersmenu.classList.remove("hidden");
        buttonHamburgermenuGebruikers.classList.add("open");
        HamburgermenuStatus = 1;
    } else if (HamburgermenuStatus == 1){
        Gebruikersmenu.classList.add("hidden");
        buttonHamburgermenuGebruikers.classList.remove("open");
        buttonHamburgermenuGebruikers.classList.add("closed");
        HamburgermenuStatus = 2;
    } else {
        Gebruikersmenu.classList.remove("hidden");
        buttonHamburgermenuGebruikers.classList.add("open");
        buttonHamburgermenuGebruikers.classList.remove("closed");
        HamburgermenuStatus = 1;
    }
};

function openPCmenu(){
    NavComputer.classList.toggle("hidden");
}


const ButtonDarkmode = document.querySelector(".gebruikersmenu ul li:nth-of-type(8)");
ButtonDarkmode.addEventListener("click",darkmode);

function darkmode(){
    Body.classList.toggle("darkmode");
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










