/**
 * aqui accedemos al document.
 * utilizamos el selector 'getElementById' el cual recibe el id del nodo o elemento 
 * del document que queremos accesar.
 * y  utilizamos el metodo addEventListener() el cual sirve para escuchar y recibe 2 argumentos 
 * 1er argumento es el nombre del evento que pondremos a escuchar
 * 2do argumento es una expresion funcion anonima o tambien puede recibir una funcion arrow
 */
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {

    /**
     * (event)  hace referencia al evento que se captura tambien es habitual usar (e)
     * event.preventDefault() se utiliza para evitar que el evento se ejecute por default
     *al cargar la pagina evitando que se envie el formulario vacio.
     */
    event.preventDefault();
    // hacemos el llamado a nuestra funcion suma
    login();
});


function login (){
    /**
     * guardamos en constantes los nodos que contienen los datos que ingreso el usuario 
     * (usuario y contraseña)
     * y tambien guardamos el nodo donde vamos a mostrar el resultado el cual esta identificado
     * con el id='resultadoLogin' y lo guardaremos en una variable para poder modificarlo,
     * tambien guardamos el nodo donde mostraremos un mensaje de error en caso de que el usuario
     * ingrese usuario y contraseña errones el cual esta identificado en nuestro 
     * html con el id='errorMsn' 
     * y lo guardamos en una variable para luego poder modificarlo
     */
      const nodoUser = document.getElementById("user");
      const nodoPass = document.getElementById("pass");
      
      let nodoResultadoLogin = document.getElementById("resultadoLogin");
      let nodoErrorMsn = document.getElementById("errorMsn");

      /**
       * accedemos a la propiedad .value de cada nodo la cual guarda el valor en texto (string)
       * ingresado por elusuario y lo guaramos en constantes
       */
    const user = nodoUser.value;
    const pass = nodoPass.value;


    /**
     * validaremos que el usuario y la contraseña no lleguen vacios
     * en la expresion la expresion (===) se valida si las comparaciones son iguales
     * Usamos el operador '||' conocido como 'ó', en este caso con que una sola condicion
     * se cumpla sera suficiente para mostrar el mensaje de error
     */
    if (user === '' || pass === '' ) {
      const mensaje = 'No se permiten <strong>campos vacios</strong>';
      /**
       * hacemos el llamado a nuestra funcion showMsnError() que sera la encargada 
       * de mostrar el mensaje de error
       * esta recibe como argumentos el mensaje de error que debera mostrar
       * y el nodo nodoErrorMsn donde se mostrara el mensaje que se envia
       */
      showMsnError(mensaje, nodoErrorMsn);
    } 

    /**
     * creamos una constante llamada 'resp' para guardar el dato 
     * que nos retorne el llamado de la funcion validandoLogin()
     * la cual recibe 2 argumentos un usuario y una contraseña
     */
    const resp= validandoLogin(user, pass);

    /**
     * la siguiente sintaxis de validacion if(resp) esta evaluando si 'resp' trae
     * como valor true.
     * es equivalente a tener  if(resp === true){}
     */
    if (resp) {
    /**
     *  utilizaremos  nodoResultadoLogin accediendo a su propiedad '.textContent'
     * y asignaremos alli el resultado de la suma.
     * empleamos  un template-string para mostrar texto y nuestro resultado
     */
     nodoResultadoLogin.innerHTML = `Login <strong> Exitoso</strong> `;
      return;
    }

    /**
       * si el usuario y contraseña ingresados no fueron correctos mostraremos un
       * mensa de error a nuestro usaurio. 
       * hacemos el llamado a nuestra funcion showMsnError() que sera la encargada 
       * de mostrar el mensaje de error
       * esta recibe como argumentos el mensaje de error que debera mostrar
       * y el nodo nodoErrorMsn donde se mostrara el mensaje que se envia
       */

    const mensaje = ' <strong>Usuario</strong> y/o <strong>Contraseña</strong> invalidos';
    showMsnError(mensaje, nodoErrorMsn);
  
}

function validandoLogin(user, pass){
  /**
   * creo un ojeto con usuario de prueba
   * tambien podriamos verlo creado utilizando la siguiente sintaxis
   * fakeUser={user: 'pepito15', pass='pepito2021'}
   */
  const fakeUser = new Object();
  fakeUser.user = 'pepito15';
  fakeUser.pass = 'pepito2021'
  /**
   * realizamos la validacion condicional si los datos que contiene
   * nuestro fakeUser son iguales a los datos que ingreso el usuario retornaremos true
   * en caso de no serlo  no ingresaria al condicional y retornariamos false
   *  Usamos el operador '&&' conocido como 'Y', en este caso se deben cumplir las
   * 2 condiciones para poder ingresar a retornar true
   */
  if (fakeUser.user === user && fakeUser.pass === pass) {
  
      return true;
  }
  return false;
}

function showMsnError (mensajeError, nodoErrorMsn){
  /**
         * en nuestro nodoErrorMsn accedemos al metodo .setAttribute()
         * el cual recibe como primer argumento el nombre de la propiead html que desamos modificar
         * para este caso vamos modificar la propiedad 'class' y como segundo argumento
         * enviamos las clases de estilo que seran asignadas a la propiedad 'class' en este caso
         * asignaremos algunas clases de estilos pertenecientes al framework de estilos boostrap
         * bg-danger --> genera un fondo rojo
         * rounded-3 --> redondea las esquinas 
         * mb-2 ---> margin-bottom agrega un margen en la parte inferior del nodoErrorMsn
         * p-2 ---> agrega un padding alrededor de todo el nodoErrorMsn 
         * 
         */
        
   nodoErrorMsn.setAttribute('class', 'bg-danger rounded-3 mb-2 p-2');
   /**
    * modificamos el nodoErrorMsn accediendo a su propiedad .innerHTML
    * la cual nos permite utilizar la sintaxis html para crear etiquetas 
    * desde javaScript en este caso crearemos una etiqueta 'strong'
    * para poner en negrita la palabra campos vacios
    */
    nodoErrorMsn.innerHTML = mensajeError;
   
   /**
    * utilizamos la instruccion de return para romper el flujo de nuestra aplicacion
    * y evitar que se continue ejecutando el codigo que pueda seguir
   */
    return;

}