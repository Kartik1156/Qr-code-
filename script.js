let imgbox = document.getElementById("imgbox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgbox.classList.add("show-img");
    } else {
        alert("Please enter a valid text or URL");
    }
}

function downloadQR() {
    if (qrImage.src && qrImage.src !== window.location.href) { 
        fetch(qrImage.src)
            .then(response => response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'qrcode.png'; 
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url); 
            })
            .catch(error => console.error('Error downloading QR code:', error));
    } else {
        alert("Please generate a QR code first!");
    }
}