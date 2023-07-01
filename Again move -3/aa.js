// const messageInput=document.getElementById("messInput");
// function clickSubmit(){
//     document.getElementById("messageOutput").innerHTML=messageInput.value;
//     messageInput.value="";
// }

function clickSubmit(){
    var showPhara=document.getElementById('messageOutput');
    var input=document.getElementById('messInput');
    showPhara.textContent=input.value;
}
var button=document.getElementById('submitButton');
button.addEventListener('click',clickSubmit);