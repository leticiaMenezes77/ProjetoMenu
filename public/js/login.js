function logar(){
    //var login = document.formulario.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var confirmar = document.getElementById('confirma').value;

    if(senha == confirmar){
        alert("Login Realizado!");
        
    }
    else{
        alert("Verifique sua senha, elas não estão corretas!");

    }
}