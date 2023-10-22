const form = document.getElementById('submit');
const generated = document.getElementById('generated-code');
const spinner = document.getElementById('spinner');
const download = document.getElementById('download');
const dropDown = document.getElementById("dropdownIcon")
const sizes = document.getElementById("sizes")
const sizeInput = document.getElementById("size-input")
const size1 = document.getElementById("size1")
const size2 = document.getElementById("size2")
const size3 = document.getElementById("size3")
const size4 = document.getElementById("size4")

const showSpinner = () => {
    spinner.style.display = 'block';
}

const hideSpinner = () => {
    spinner.style.display = 'none';
}

const makeCode = (url, size) => {
    const qrcode = new QRCode(generated, {
        text: url,
        width: size,
        height: size,
    });
 }

const clearUI = () => {
    generated.innerHTML = '';
    download.innerHTML = '';
}

dropDown.addEventListener("click", () => {
    if (sizes.style.display === 'none' || sizes.style.display === '') {
        sizes.style.display = 'block'; 
    } else {
        sizes.style.display = 'none';
    }
})

sizes.addEventListener("click", () => {
    if (sizes.style.display === 'none' || sizes.style.display === '') {
        sizes.style.display = 'block'; 
    } else {
        sizes.style.display = 'none';
    }
})

size1.addEventListener("click", () => {
    sizeInput.value = "100 X 100";
    sizeInput.setAttribute('data-size', '100');
} )

size2.addEventListener("click", () => {
    sizeInput.value = "200 X 200";
    sizeInput.setAttribute('data-size', '300')
} )

size3.addEventListener("click", () => {
    sizeInput.value = "300 X 300";
    sizeInput.setAttribute('data-size', '300')
} )

size4.addEventListener("click", () => {
    sizeInput.value = "400 X 400";
    sizeInput.setAttribute('data-size', '400')
} )

const downloadCode = (saveURL) => {
    const downloadBtn = document.createElement('a');
    downloadBtn.href = saveURL;
    downloadBtn.download = 'qrcode' 
    downloadBtn.innerHTML = 'Download QR Code';
    downloadBtn.id= 'btn'; 
    downloadBtn.classList = 'cursor-pointer p-2 rounded-[8px] '
    download.appendChild(downloadBtn)
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearUI(); 
    showSpinner();

    const url = document.getElementById('url').value;
    // const size = document.getElementById('size-input').value;
    const size = parseInt(sizeInput.getAttribute('data-size'))
    
    setTimeout(() =>{
       hideSpinner(); 
       makeCode(url, size);

       setTimeout(() => {
            const saveURL = generated.querySelector("img").src;
            downloadCode(saveURL);
       }, 50);
    }, 1000)
    
});
