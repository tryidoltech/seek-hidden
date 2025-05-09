(function () {
    emailjs.init("0Vw-TqZ0bGCdT6eUm");
  })();
  
  window.onload = function () {
    document.getElementById('contactformHB').addEventListener('submit', function (event) {
      event.preventDefault();
  
      emailjs.sendForm('service_eoxo9hl', 'template_w93x8bv', this)
        .then(() => {
          document.getElementById("success").style.display = "block";
          document.getElementById("error").style.display = "none";
          this.reset();
        }, (error) => {
          document.getElementById("error").style.display = "block";
          document.getElementById("success").style.display = "none";
          console.error('FAILED...', error);
        });
    });
  };
  
const serviceId="service_eoxo9hl";
const templateId="template_w93x8bv";
emailjs.send(serviceId,templateId,params)
.then((res)=>{document.getElementById("name").value="";
console.log(res);
});