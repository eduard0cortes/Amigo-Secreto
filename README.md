<h1 align=center>CHALLENGE AMIGO SECRETO</h1>

<h2>Descripción del proyecto</h2>
<p>En este Challenge se desarrolló una aplicación que permite a los usuarios ingresar los nombres de sus amigos por medio de una lista, una vez que la lista se ha llenado, se realiza un sorteo de forma aleatoria donde el programa nos arroja quien será el "amigo secreto" </p>
<h2>Estado del proyecto</h2> 
<p>Finalizado!! </p>
<h2>Características de la aplicación y demostración</h2>

<p> El codigo del programa consta de 2 funciones:</p>

<h3>La primer función se denominó bajo el nombre <strong>agregarAmigo():</strong> </h3>

<p>  -primero declaramos una variable de nombre "inputAmigo" que obtendra el valor del archivo HTML con el ID "amigo" </p>
<p>  -declaramos una segunda variable de nombre "listaAmigos" que obtendrá su valor del archivo HTML con el ID "listaAmigos"</p>
<p>  -declaramos una tercer variable de nombre"nombre" que es ingresada por el usuario y utlizamos la función trim() para borrar los espacios en blanco</p>
<p>  -despues generamos una condición <strong>if</strong> donde indicamos que si la variable nombre está vacía, entonces nos mande una alerta que diga "Por favor, ingresa un nombre valido"</p>
<p>  -una vez que el usuario ingrese un amigo, se guardara en una variable de nombre "nuevoAmigo"</p>
<p>  -cada nuevo amigo que se ingrese, se acomodará en una lista por medio de la función append.Child</p>
<p>  -en la caja para input limíamos el campo de entrada con la linea "inputAmigo.value="" "</p>

<h3>La segunda función se denominó bajo el nombre <strong>sortearAmigo()</strong></h3>

<p>-declaramos primero una variable con nombre: "listaAmigos" que recibirá su valor del archivo HTML con ID "listaAmigos"</p>
<p>-declaramos después una variable con nombre: "resultado" que recibirá su valor del archivo HTML con ID "resultado"</p>
<p>-declaramos después una variable que contendra el array de la lista de amigos con el nombre "amigos"</p>
<p>-después definimos una condición <strong>if</strong> donde indicamos que si el tamaño de la lista=0 nos arroje una alerta que diga "no hay amigos en la lista de sortear</p>
<p>-después vamos a generar de forma aleatoria el amigo secreto de la lista de amigos con la variable amigoSecreto, que contendrá la función: "const amigoSecreto=amigos[Math.floor(Math.random()*amigos.length)].textContent;" </p>
<p>-después a la variable resultadoItem le agregamos el dato aleatorio</p>
<p>-y por ultimo imprimimos el resultado con el string"el amigo secreto es: "</p>


<h2>Tecnologías utilizadas</h2>
<p>JavaScript</p>
<p>CSS</p>
<p>HTML</p>

<h2>Personas contribuyentes</h2>
Alura Latam, Eduardo Cortes

<h2>Conclusión</h2>
Por medio de este Challenge pude aplicar todos los conocimientos de lógica de programación que he aprendido y es un acercamiento más a este proceso de aprendizaje, Gracias a todo el equipo de Alura Latam y Oracle New Education!!
