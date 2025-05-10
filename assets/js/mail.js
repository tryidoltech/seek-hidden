// (function () {
//     emailjs.init("0Vw-TqZ0bGCdT6eUm");
//   })();
  
//   window.onload = function () {
//     document.getElementById('contactformHB').addEventListener('submit', function (event) {
//       event.preventDefault();
  
//       emailjs.sendForm('service_eoxo9hl', 'template_w93x8bv', this)
//         .then(() => {
//           document.getElementById("success").style.display = "block";
//           document.getElementById("error").style.display = "none";
//           this.reset();
//         }, (error) => {
//           document.getElementById("error").style.display = "block";
//           document.getElementById("success").style.display = "none";
//           console.error('FAILED...', error);
//         });
//     });
//   };
  
// const serviceId="service_eoxo9hl";
// const templateId="template_w93x8bv";
// emailjs.send(serviceId,templateId,params)
// .then((res)=>{document.getElementById("name").value="";
// console.log(res);
// });

(function () {
    emailjs.init("GNUU32vb0lXj2aDCm");
})();

window.onload = function () {
    document.getElementById('contactformHB').addEventListener('submit', function (event) {
        // Validate contact number before submitting
        const contactNumber = document.getElementById('contactNumber').value;
        const cleanedNumber = contactNumber.replace(/\D/g, ''); // Remove all non-digit characters
        
        if (cleanedNumber.length < 10) {
            alert('Please enter a valid contact number with at least 10 digits');
            event.preventDefault();
            return;
        }

        event.preventDefault();
        
        emailjs.sendForm('service_eoxo9hl', 'template_r4u2v2o', this)
            .then(() => {
                // Show success message
                document.getElementById("success").classList.remove("d-none");
                document.getElementById("error").classList.add("d-none");
                
                // Reset form
                this.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    document.getElementById("success").classList.add("d-none");
                }, 5000);
            }, (error) => {
                // Show error message
                document.getElementById("error").classList.remove("d-none");
                document.getElementById("success").classList.add("d-none");
                
                console.error('FAILED...', error);
                
                // Hide error message after 5 seconds
                setTimeout(() => {
                    document.getElementById("error").classList.add("d-none");
                }, 5000);
            });
    });
};