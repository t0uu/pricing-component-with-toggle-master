const pro = document.getElementById("Pro");
const basic = document.getElementById("basic");
const Master = document.getElementById("Master");
const change = document.getElementById("change")
let anualy = false


change.addEventListener("change", function () {

    if(anualy == true){
       anualy = false
       
    }else{
       anualy = true
    }
    updateValue();

});


function updateValue() {
    
    if(anualy == true){
        pro.innerHTML = '$24.99'
        Master.innerHTML = "$39.99"
        basic.innerHTML = "$19.99"
    }else{
        Master.innerHTML = "$399.99"
        pro.innerHTML = "$249.99"
        basic.innerHTML = "$199.99"
    }
}