
function successreq(){
    var input=document.getElementById('mgsOutput');
    var output=document.getElementById('INPUT');

    input.textContent=output.value;

}
var submitButton=document.getElementById('clButton');
submitButton.addEventListener('click',successreq);