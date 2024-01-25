$(document).ready(function() {   //função representa se o DOM carrega tudo então ele executa o codigo 

    $("#botão-adicionar").click(function() {  //sempre que o botão for acionado a função acontece:
        const valorCampo = $("#campo-tarefas").val(); //atribuindo o valor do input a uma variavel
        $("#Lista_tarefa").append("<li>" + valorCampo + "</li>");  //adiciona o valor da constante a tag <li>
        $("#campo-tarefas").val(""); // 'reseta' o valor do input 
        console.log(valorCampo); // mostra o valor adicionado no console
    });

    $("#Lista_tarefa").on("click", "li", function() {  //faz com que o valor seja riscado toda vez que for 'clicado'
        $(this).toggleClass("linha-atravessada");
    })

    $("#Lista_tarefa li:first-child").hide(); //esconde a primeira linha da lista

    $("form").on("submit", function(e) { //faz com que o forms não seja enviado e então não recarrega a pagina
        e.preventDefault();
    });
});
