const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");


generateBtn.addEventListener("click", function(e){
    e.preventDefault();
    let qrValue = qrInput.value;
    if(!qrValue) return;//if the input is empty then return here    
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    
    qrImg.addEventListener("load", ()=>{
        wrapper.classList.add("active");
        generateBtn.innerText = "Generating QR Code";
    });
})

qrInput.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
    let qrValue = qrInput.value;
    if(!qrValue) return;//if the input is empty then return here    
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    
    qrImg.addEventListener("load", ()=>{
        wrapper.classList.add("active");
        generateBtn.innerText = "Generating QR Code";
    });
    }
})

qrInput.addEventListener("keyup", function(e){
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})