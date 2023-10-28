function EnviarFormulario(){
     var Nom = document.getElementById("nombres").value;
     var Ape = document.getElementById("apellidos").value;

     if(Nom == ""){
        alert("Ingrese el primer y segundo Nombre, por favor")
     }else{
        if(Ape == ""){
            alert("Ingrese el primer y segundo Apellido, por favor")
        }
     }
     var expresionCorreo = /^\w+([\.\+\-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;
     var correo = document.getElementById("correo").value;
     var expresionTelefono = /^[6-7]{1}[0-9]{7}$/;
     var telefono = document.getElementById("telefono").value;

     if(correo == ""){
        alert("Introduzca el Correo")
     }else{
        if(expresionCorreo.test(correo)){
            //alert("Correo Valido")
        if(telefono == ""){
            alert("Introduzca el número de teléfono")
        }else{
            if(expresionTelefono.test(telefono)){
            //alert("El número de telefono es correcto")
        }else{
            alert("El número debe empezar con un 6 o 7")
        }
      }
    }else{
        alert("Intrduzca un Correo valido")
    }
  }
}
