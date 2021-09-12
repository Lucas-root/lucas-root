
var ele = document.getElementById('pagina');
if (ele.innerText == 'index'){
	ele = 'inicio'
	var estilo = document.getElementById(ele);
}else{
var estilo = document.getElementById(ele.innerText);
}
estilo.style.color = '#3C8C03';

var height_header = document.getElementsByTagName('header')[0].offsetHeight;
var todo_conteudo = document.getElementById('todo-conteudo');
todo_conteudo.style.marginTop = height_header+'px';
console.log(height_header)

var height_todo_conteudo = todo_conteudo.style.offsetHeight;
var body = document.getElementsByTagName('body')[0];
body.style.minHeight = 'calc(101vh - '+ height_header + 'px - ' + height_todo_conteudo +'px';


// calculo margin para o footer
var foo = document.getElementsByTagName('footer')[0]
var wi = foo.offsetHeight;
var bo = document.getElementsByTagName('body')[0];
bo.style.paddingBottom = wi + 'px';


// estratégia para responsividade do menu


let show = true;
const menuSection = document.querySelector(".toggle-menu");
const menuToggle = menuSection.querySelector(".menu-toggle");
var logoLink = document.querySelector('#container-logo');
var displayLogo = logoLink.style.display;

menuToggle.addEventListener("click", () => {

	//funcionalidade do botão
	menuSection.classList.toggle("on", show);
	show = !show;

	// remover a logo ao clicar no botão
	if (displayLogo != 'none'){
		logoLink.style.display = 'none';
		displayLogo = 'none';
		
	}else {
		logoLink.style.display = 'flex';
		displayLogo = 'flex';
	}
})