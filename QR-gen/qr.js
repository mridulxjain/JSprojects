let inputBox = document.querySelector("#input-box");
let imgBox = document.querySelector("#img-box");
let qrImg = document.querySelector("#qr-img");

function genQR(){
    if(inputBox.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputBox.value;
        imgBox.classList.add("show-img");
    }else{
        inputBox.classList.add("error");
        setTimeout(()=>{
            inputBox.classList.remove("error");
        },1000)
        imgBox.classList.remove("show-img");
    }
}