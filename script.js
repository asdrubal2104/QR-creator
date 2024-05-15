document.getElementById('generateBtn').addEventListener('click', function() {
  var link = document.getElementById('linkInput').value;
  if (link) {
      var qrcodeContainer = document.getElementById('qrcode');
   
      // Limpiar cualquier QR previo, pero mantener el contenedor
      while (qrcodeContainer.firstChild) {
        qrcodeContainer.removeChild(qrcodeContainer.firstChild);
      }

      // Configurar el QR Code Styling con alta resolución
      var qrCode = new QRCodeStyling({
          width: 6000,
          height: 6000,
          data: link,
          image: '', // Ruta a un logo de prueba
          imageOptions: {
              crossOrigin: "anonymous",
              margin: 20 // Ajustar margen del logo
          },
          dotsOptions: {
              color: "#000000",
              type: "rounded" // Opciones: square, dots, rounded, etc.
          },
          cornersSquareOptions: {
              color: "#000000",
              type: "extra-rounded" // Opciones: square, extra-rounded, etc.
          },
          cornersDotOptions: {
              color: "#000000",
              type: "dot" // Opciones: square, dot
          },
          backgroundOptions: {
              color: "",
          }
      });

      qrCode.append(qrcodeContainer);

      // Configurar el enlace para descargar la imagen del código QR
      qrCode.getRawData('png', 300).then(blob => {
          const url = URL.createObjectURL(blob);
          var downloadLink = document.getElementById('downloadLink');
          downloadLink.href = url;
          downloadLink.style.display = 'block';
      });
  } else {
      alert("Por favor, introduce un enlace válido.");
  }
});
