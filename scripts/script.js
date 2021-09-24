// JavaScript Document
const buttonHamburgermenuGebruikers = document.querySelector(".hamburger");
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

function openGebruikersmenu(){
    Gebruikersmenu.classList.toggle("hidden");
};

function openPCmenu(){
    NavComputer.classList.toggle("hidden");
}