$(document).ready(function(){

    //Validar o formulário
    $('#form_cad').submit(function(){

        /*var email = $('#email').val();
        var senha = $('#senha').val();
        var confirmacao = $('#confirmacao').val();

        if (!nome.length) {
            alert("Preencha corretamente o nome!");
            return false;
        }

        if (nome.length > 100) {
            alert("O nome deve ter no máximo 100 letras!");
            return false;
        }

        if (!email.length) {
            alert("Preencha corretamente o e-mail!");
            return false;
        }
        if (!senha.length) {
            alert("Preencha corretamente a senha!");
            return false;
        }

        if (!confirmacao.length) {
            alert("Preencha corretamente a confirmação!");
            return false;
        }

        if (senha != confirmacao) {
            alert("A confirmação da senha está incorreta!");
            $("#confirmacao").val('');
            return false;
        }*/

        if (!$("#nome").val().length) {
            var erro = $('<p class="txtErro"></p>');
            erro.html('Preencha o campo corretamente!');

            $("#nome").closest('div').append(erro);

            $("#nome").addClass('erroInput');
        }



        return false;
        
    });

});