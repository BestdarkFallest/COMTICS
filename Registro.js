document.querySelector('#btnRegistrarse').addEventListener('click', Register);

function Register(){
  let Nombre='';
  let Apellido='';
  let Email='';
  let Contra='';
  let Rol=0;

  Nombre = document.querySelector('#myname').value;
  Apellido = document.querySelector('#surname').value;
  Email = document.querySelector('#Email').value;
  Contra = document.querySelector('#password').value;
  Rol = document.querySelector('input[name="Roles"]:checked').value;

  console.log(Nombre);
  console.log(Apellido);
  console.log(Email);
  console.log(Contra);
  console.log(Rol);

  Guardar(Nombre,Apellido,Email,Contra,Rol);
}

function Guardar(Nombre,Apellido,Email,Contra,Rol){
  let nuevoUs = {
    Name    :Nombre,
    Usname  :Apellido,
    Mail    :Email,
    Pass    :Contra,
    rol     :Rol
  };
  listaUsuarios.push(nuevoUs);

  console.log(listaUsuarios);

  window.open('index.html')
  window.close('COMTICS_registro.html')
}