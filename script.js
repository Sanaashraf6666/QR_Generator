let imgBox=document.getElementById("imgBox");
let qrImage=document.getElementById("qrImage");
let qrText=document.getElementById("qrText");
function generateQRCode() {
    if(qrText.value.length > 0) {

    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrText.value;
    imgBox.classList.add("show-img");

}
    else {
        alert("Please enter some text to generate a QR code.");
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 2000);
    }
}