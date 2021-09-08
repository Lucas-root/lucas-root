
var ele = document.getElementById('pagina');
if (ele.innerText == 'index'){
	ele = 'inicio'
	var estilo = document.getElementById(ele);
}else{
var estilo = document.getElementById(ele.innerText);
}
estilo.style.color = '#3C8C03';

