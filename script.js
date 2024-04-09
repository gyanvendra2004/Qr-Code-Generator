const input = document.querySelector('.input-box')
    const generaterBtn = document.querySelector(".createQr")
    const img = document.querySelector('img')
      
    generaterBtn.addEventListener('click', () => {
        let qrApi =  'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value
        img.src = qrApi
    })