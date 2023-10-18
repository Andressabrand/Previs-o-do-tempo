


const key = "96906b28136a7be294c9c7dc5dc20c5d"


function ColocarDadosNaTela(dados){
    console.log(dados)
document.querySelector(".cidade").innerHTML= "Tempo em " + dados.name
document.querySelector(".temp").innerHTML= Math.floor(dados.main.temp) + "°C"
document.querySelector(".texto-previsão").innerHTML = dados.weather[0].
description
document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
document.querySelector(".img-previsão").scr = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`




}




 async function BuscarCidade( cidade){
const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then (resposta => resposta.json()) 


ColocarDadosNaTela(dados)

}





function CliqueiNoBotao(){
const cidade = document.querySelector(".input-city").value

BuscarCidade ( cidade)

}
