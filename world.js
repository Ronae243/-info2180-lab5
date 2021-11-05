/* Add your JavaScript to this file */

function searchbtn(){
    var subbutton = document.querySelector("button");
    console.log(subbutton);
    subbutton.addEventListener("click", function(event) {
        country();
        event.preventDefault();
    });
}

function lookup_cities(){
    var subbutton = document.getElementById("lookup_cities");
    console.log(subbutton);
    subbutton.addEventListener("click", function(event) {
        cities();
        event.preventDefault();
    });
}


function sanitizeString(str){
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    return str.trim();
}

function country(){

    var userent = document.querySelector("input").value;
    var sanUser = sanitizeString(userent);
    var strResult = document.getElementById("result");
    var http = new XMLHttpRequest();
    var url = "http://localhost:8080/-info2180-lab5/world.php?country=";
    http.onreadystatechange = function(){
        if(http.readyState == XMLHttpRequest.DONE && http.status == 200){
               strResult.innerHTML = http.responseText;
        }
    }
    http.open('GET', url+sanUser, true);
    http.send();  
}

function cities(){

    var userent = document.querySelector("input").value;
    var sanUser = sanitizeString(userent);
    var strResult = document.getElementById("result");
    var http = new XMLHttpRequest();
    var url = "http://localhost:8080/-info2180-lab5/world.php?context=";
    http.onreadystatechange = function(){
        if(http.readyState == XMLHttpRequest.DONE && http.status == 200){
               strResult.innerHTML = http.responseText;
        }
    }
    http.open('GET', url+sanUser, true);
    http.send();  
}


window.addEventListener("DOMContentLoaded",function(){
    searchbtn();
    lookup_cities();
})