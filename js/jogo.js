/*Definir a altura e largura da tela do jogo*/
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criarMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
	criarMosquitoTempo = 1500
}else if (nivel === 'dificil') {
	criarMosquitoTempo = 1000
}else if (nivel === 'chucknorris') {
	criarMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(`${largura} , ${altura}`)//DEBUG
}

ajustaTamanhoPalcoJogo()

/***********************************************************************************************/
/*Cronometro do jogo*/
var cronometro = setInterval(function(){
	tempo --

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criarMosquito)
		window.location.href = 'vitoria.html'
	}else{
	document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)


/*Usar a altura e largura para definir aleatóriamente a posição do mosquito*/
/*Criar uma função para isso*/

/***********************************************************************************************/


function posicaoRandomica(){

if (document.getElementById('mosquito')) {		//
	document.getElementById('mosquito').remove()//Lógica para remover o mosquito, caso exista

	
	if (vidas > 3) {
		window.location.href = 'fim_de_jogo.html'
	}else{
		document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'
		vidas++
	}
}												//

var posicaoX = Math.floor(Math.random() * largura) -90
var posicaoY = Math.floor(Math.random() * altura) -90

/*Se posição for menor que zero, posição recebe zero, senão, recebe a própria posição*/

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(`${posicaoX} , ${posicaoY}`)//DEBUG

/*Criar o elemento do mosquito no HTML em coordenadas randômicas*/
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ladoAleatorio()
mosquito.id = 'mosquito'
mosquito.onclick = function(){
	this.remove()
}

/*Aqui vai o código que coloca o mosquito em areas randomicas*/

mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'


document.body.appendChild(mosquito)

tamanhoAleatorio()
}


/*********************************************************************************************/
/*Essa função altera o tamanho do mosquito*/
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	switch(classe){
		case 0:
			return 'mosquito1 '

		case 1:
			return 'mosquito2 '
		

		case 2:
			return 'mosquito3 '
		
	}
}
/*********************************************************************************************/
/*Essa função altera o lado que o mosquito olha*/
function ladoAleatorio(){
	var lado = Math.floor(Math.random() * 2)

	switch(lado){
		case 0:
			return 'ladoA '

		case 1:
			return 'ladoB '
	}
}
/********************************************************************************************/