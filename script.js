window.addEventListener('hashchange', updateHash);
window.addEventListener('load', updateHash);

function updateHash() {
  switch (this.document.location.hash) {
    case '#whereto':
      this.document.getElementById('turlarlink').classList.add('active');
      this.document.getElementById('contactlink').classList.remove('active');
      break;
    case '#contact':
      this.document.getElementById('turlarlink').classList.remove('active');
      this.document.getElementById('contactlink').classList.add('active');
      break;
    default:
      this.document.getElementById('turlarlink').classList.remove('active');
      this.document.getElementById('contactlink').classList.remove('active');
      break;
  }
}



(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add('was-validated');
        }, false);
      });
    })();

    

