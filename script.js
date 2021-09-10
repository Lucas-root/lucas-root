
var ele = document.getElementById('pagina');
if (ele.innerText == 'index'){
	ele = 'inicio'
	var estilo = document.getElementById(ele);
}else{
var estilo = document.getElementById(ele.innerText);
}
estilo.style.color = '#3C8C03';

var height_header = document.getElementsByTagName('header')[0].offsetHeight;
var container_content = document.getElementsByClassName('container-content')[0];
container_content.style.marginTop = height_header+'px';

var height_container_content = container_content.style.offsetHeight;
var body = document.getElementsByTagName('body')[0];
body.style.minHeight = 'calc(101vh - '+ height_header + 'px - ' + height_container_content +'px';