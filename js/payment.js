var btn2 = document.querySelector('.submit_payment_btn')
var forms = document.getElementsByClassName('needs-validation');


// var validation = Array.prototype.filter.call(forms, function(form) {
//       btn2.addEventListener('click', function(e) {
//         if (form.checkValidity() === false) {
//           e.preventDefault();
//           e.stopPropagation();
//         }
//         else{
//         window.location.replace('thankyou.html')
//         e.preventDefault();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });

btn2.addEventListener("click", function(e){

  window.location.replace('thankyou.html')
  e.preventDefault();
})

