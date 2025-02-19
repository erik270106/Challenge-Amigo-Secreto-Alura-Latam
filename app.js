let amigos=[];

function agregarAmigo(){
  function verificadorDeTexto(){
    let nombreAmigo=document.getElementById('amigo').value.trim().toLowerCase();   //limpiar caja
    const soloLetras = /^[a-zA-Z\s]*$/;     //verifica que solo sea letras 
    console.log(nombreAmigo);
    
    if(nombreAmigo === ''){
      alert("por favor inserta un nombre");
      return;

    } else if (soloLetras.test(nombreAmigo)) {   
      if (amigos.includes(nombreAmigo)) { // Verificar si el nombre ya existe
      alert("Este nombre ya existe");
      document.getElementById('amigo').value = "";
      document.getElementById('amigo').focus();
      return;
      console.log(amigos);
      }
      amigos.push(nombreAmigo);
      document.getElementById('amigo').value = "";
      mostrarAmigos();
    } else {
      alert("Por favor ingresa un nombre valido");
      document.getElementById('amigo').value = "";
      return;
    
    }
  }

  verificadorDeTexto ();

  function mostrarAmigos(){     // se obtiene el elemento de lista de amigos
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';      // se limpia la lista de amigos
        
 // itera sobre el arreglo y agrega el elemento a la lista

    for(let i = 0 ; i < amigos.length; i++ ){
      const nuevoAmigo = document.createElement("li");
      nuevoAmigo.textContent = amigos[i];
      listaAmigos.appendChild(nuevoAmigo); 
    }
  }
}  

function sortearAmigo() {// validar que alla amigos en la lista
    if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML = "No hay amigos para sortear"; // error si no hay nombres para sortear
     return;
  }

  // Genera un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);// generar el indice aleatorio
      
  // Obtiene el nombre del amigo sorteado
  const amigoSorteado = amigos[indiceAleatorio];// obtener un nombre aleatorio
      
  // Muestra el resultado
  document.getElementById("resultado").innerHTML= `El amigo sorteado es: ${amigoSorteado}`; //resultado del sorteo
}


     

