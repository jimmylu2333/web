var t = setTimeout('setHeight()',1000);
function setHeight(){
var chart = document.getElementById('chart');
var h = chart.contentDocument.getElementsByTagName('html')[0].scrollHeight;
chart.height = h;    
}
