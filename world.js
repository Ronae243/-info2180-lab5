/* Add your JavaScript to this file */

function searchbtn(){
    var subbutton = document.querySelector("button");
    console.log(subbutton);
    subbutton.addEventListener("click", function(event) {
        suphero();
        event.preventDefault();
    });
}

function sanitizeString(str){
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    return str.trim();
}

function suphero(){

    var userent = document.querySelector("input").value;
    var sanUser = sanitizeString(userent);
    var strResult = document.getElementById("result");
    var http = new XMLHttpRequest();
    var url = "http://localhost:8080/-info2180-lab5/world.php?country=";
    http.onreadystatechange = function(){
        if(http.readyState == XMLHttpRequest.DONE && http.status ==200){
               strResult.innerHTML = http.responseText;
        }
    }
    http.open('GET', url+sanUser, true);
    http.send();  
}


window.addEventListener("DOMContentLoaded",function(){
    searchbtn();
})