function validarFormulario(event) {
    event.preventDefault();
  
    var form = document.getElementById("myForm");
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var comment = form.elements["comment"].value;
    var firstTimeChecked = form.elements["first-time"].checked;
  
    if (name.length < 10) {
      alert("O nome deve ter pelo menos 10 caracteres.");
      return;
    }
  
    if (!email.includes("@") || !email.includes(".")) {
      alert("Por favor, insira um email válido.");
      return;
    }
  
    if (comment.length < 20) {
      alert("O comentário deve ter pelo menos 20 caracteres.");
      return;
    }
  
    var mensagem;
    if (firstTimeChecked) {
      mensagem = "Volte sempre a esta página!";
    } else {
      mensagem = "Que bom que você voltou a visitar esta página!";
    }
  
    alert(mensagem);
  }
  
  function limparFormulario() {
    document.getElementById("myForm").reset();
  }
  
  document.getElementById("myForm").onsubmit = validarFormulario;
  