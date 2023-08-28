    // Função para abrir o modal
    function openModal(modalId) {
      var modal = document.getElementById(modalId);
      modal.style.display = "block";
    }

    // Função para fechar o modal
    function closeModal(modalId) {
      var modal = document.getElementById(modalId);
      modal.style.display = "none";
    }

    // Eventos de clique nos botões
    var btns = document.getElementsByClassName("myBtn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].onclick = function() {
        var modalId = "myModal" + (Array.prototype.indexOf.call(btns, this) + 1);
        openModal(modalId);
      };
    }

    // Evento de clique fora do modal para fechá-lo
    window.onclick = function(event) {
      for (var i = 0; i < btns.length; i++) {
        var modalId = "myModal" + (i + 1);
        var modal = document.getElementById(modalId);
        if (event.target == modal) {
          closeModal(modalId);
        }
      }
    };