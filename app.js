// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo(){

    const inputAmigo=document.getElementById("amigo");
    const listaAmigos=document.getElementById("listaAmigos");
    const nombre=inputAmigo.value.trim();

    if(nombre===""){
        alert("por favor, ingresa un nombre valido");
        return;
    }

    const nuevoAmigo=document.createElement("li");
    nuevoAmigo.textContent=nombre;
    listaAmigos.appendChild(nuevoAmigo);
    inputAmigo.value="";
}

function sortearAmigo(){

    const listaAmigos=document.getElementById("listaAmigos");
    const resultado=document.getElementById("resultado");
    const amigos=Array.from(listaAmigos.children);

    if(amigos.length===0){
        alert("no hay amigos en la lista de sortear");
        return;
    }

    const amigoSecreto=amigos[Math.floor(Math.random()*amigos.length)].textContent;

    resultado.innerHTML="";
    const resultadoItem=document.createElement("li");
    resultadoItem.textContent=`El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(resultadoItem);
}
