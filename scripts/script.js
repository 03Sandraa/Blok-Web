// JavaScript Document
const buttonHamburgermenuGebruikers = document.querySelector(".hamburger");
const Gebruikersmenu = document.querySelector(".gebruikersmenu ul"); 

buttonHamburgermenuGebruikers.addEventListener("click",openGebruikersmenu);

function openGebruikersmenu(){
    Gebruikersmenu.classList.toggle("hidden");
};