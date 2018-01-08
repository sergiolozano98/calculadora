
  function numero(idnumero) {
    pantalla.innerHTML += idnumero;
  }

  function calcular(numeros){
    var separados = numeros.split("+");
   // length cuenta la separacion del array
    if (separados.length==3) {
     var resultado = parseInt(separados[0])+parseInt(separados[1])+parseInt(separados[2]);
     pantalla.innerHTML = resultado;
    }else if (separados.length==2) {
        //separamos los dos array por el signo de la multiplicacio
        var operarador1=separados[0].split("*");
        var operarador2=separados[1].split("*");
        //si al separarlo hay dos elementos significa que estos dos hay que multiplicarlos y el numero queda lo sumamos.
        if (operarador1.length==2) {
           var multi = parseInt(operarador1[0])*parseInt(operarador1[1]);
           var resultado =multi+parseInt(operarador2);
        }else if (operarador2.length==2) {
          var multi = parseInt(operarador2[0])*parseInt(operarador2[1]);
          var resultado =multi+parseInt(operarador1);
        }
     pantalla.innerHTML = resultado;
     //si solo vuenta un elemento es que todos esos elemetos se multiplican
    }else if (separados.length==1) {
    var separadomulti =  numeros.split("*");
    var resultado = parseInt(separadomulti[0])*parseInt(separadomulti[1])*parseInt(separadomulti[2]);
    pantalla.innerHTML = resultado;
    }
  }
   //cambia el contenido de pantalla por null
  function borrartodo(){
    pantalla.innerHTML=null;
  }
  //
  function borrarUltimo(){
    //metemos toda la pantalla y lo separamos por espacios.
    var contenido = pantalla.innerHTML;
    contenido = contenido.split("");
    //el length-1 mete en la variable el ultimo caracter.
    var ultimoCaracter = contenido.length-1;
    //elimina el ultimo caracter
    var eliminar = contenido.splice(ultimoCaracter,1);
    // y ya le paseamos la informacion y lo convierte en string y lo imprimimos por pantalla
    informacion = contenido.join("");
    pantalla.innerHTML = informacion;
  }
