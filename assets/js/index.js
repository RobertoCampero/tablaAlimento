var p = document.getElementById('fechaIngreso');
var mydate = new Date();
var day = mydate.getDay();
var month = mydate.getMonth();
var year = mydate.getYear() + 1900;
var d = mydate.getDate();
var months = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE","NOVIEMBRE","DICIEMBRE"];
p.innerHTML = d + "/" + months[month] + "/" + year;

document.getElementById('UnidadNombre').innerHTML="UNIDAD PRODUCTIVA "+document.getElementById('UnidadProductiva').innerHTML;