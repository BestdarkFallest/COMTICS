let listaUsuarios=[
    //id, nombre, apellido, correo,contraseña,rol
    ['mati','faccendini','mati.com','123','1' ],
    ['pepe','borge','pepe.com','456','2']
  ];

function obtenerListaUsuarios(){
    return listaUsuarios;
}

function validarCredenciales(pCorreo , pContra){
    var listaUs  = obtenerListaUsuarios();
    var bAcc = false;

    for(var i=0; i<listaUs.length; i++){
        if(pCorreo == listaUs[i][2] && pContra == listaUs[i][3]){
            bAcc = true;
            
            sessionStorage.setItem('usuarioActivo', listaUs[i][0]);
            sessionStorage.setItem('rolUsuarioActivo', listaUs[i][4]);
        }
    }
    return bAcc;
}
