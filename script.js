$(document).ready(function(){
    $('.slide').slick({
        autoplay: true
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })
    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')
    $('#cpf').mask('000.000.000-00')


    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages:{
            nome: "Complete o campo",
            telefone: "Complete o campo",
            email: "Complete o campo",
            cpf: "Complete o campo",
            endereco: "Complete o campo",
            cep: "Complete o campo"
        },
        submitHandler: function(form){
            alert(`Cadastro concluído com sucesso!`)

            nome.value = ""
            email.value = ""
            telefone.value = ""
            cpf.value = ""
            endereco.value = ""
            cep.value = ""
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Ainda a ${camposIncorretos} a serem preenchidos`)
            }
        }
    })
})