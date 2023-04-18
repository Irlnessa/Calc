function slovo(first){
    if (document.getElementById("stroka").value){
        if (document.getElementById("stroka").value == "Составьте предложение"){
            document.getElementById("stroka").value = first;    
        }
        else{
            document.getElementById("stroka").value += first;
        }
    }
}
function clear(){
    document.getElementById("stroka").value ="Составьте предложение";
    
}
function reset(){
    clear()
}