// JavaScript Document
const buttonHamburgermenuGebruikers = document.querySelector(".hamburger");
const Gebruikersmenu = document.querySelector(".gebruikersmenu ul"); 
const ButtonNavComputer = document.querySelector(".ButtonNavComputer");
const NavComputer = document.querySelector(".navComputer");
const ButtonPlaystation = document.querySelector(".ButtonPlaystation");
const NavPlaystation = document.querySelector(".navPlaystation");
const ButtonNavXbox = document.querySelector(".ButtonNavXbox");
const NavXbox = document.querySelector(".navXbox");
const ButtonNavNintendo = document.querySelector(".ButtonNavNintendo");
const NavNintendo = document.querySelector(".navNintendo");

buttonHamburgermenuGebruikers.addEventListener("click",openGebruikersmenu);
ButtonNavComputer.addEventListener("click",openPCmenu);

function openGebruikersmenu(){
    Gebruikersmenu.classList.toggle("hidden");
};

function openPCmenu(){
    NavComputer.classList.toggle("hidden");
}