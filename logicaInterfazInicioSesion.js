document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);


function iniciarSesion(){
    var sMail ='';
    var sPass ='';
    var bAcc = false; 

    sMail = document.querySelector('#txtMail').value;
    sPass = document.querySelector('#txtPass').value;
    
    bAcc= validarCredenciales(sMail,sPass);
    
    if(bAcc == true){
        ingresar();
    }
    
}

function ingresar(){
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case "1":
            window.open('COMTICS_docentes.html')
            window.close('COMTICS_iniciarsesion.html')
        break
        case "2":
            window.open('COMTICS_alumnos.html')
            window.close('COMTICS_iniciarsesion.html')
        break;
        default:
            window.href='COMTICS_iniciarsesion.html'
        break;

    }
}