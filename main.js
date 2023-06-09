
    function validarFormulario() {
      var campoA = parseInt(document.getElementById("campoA").value);
      var campoB = parseInt(document.getElementById("campoB").value);

      if (campoB > campoA) {
        alert("Formulário válido!");
      } else {
        alert("Formulário inválido! O Campo B deve ser maior que o Campo A.");
        return false; // Impede o envio do formulário
      }
    }
   