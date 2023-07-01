function doneSubmit(){
    var inpu=document.getElementById('Input');
    var outpu=document.getElementById('Output');
    outpu.textContent=inpu.value;
}
var butt=document.getElementById('submitBtn');
butt.addEventListener('click',doneSubmit);