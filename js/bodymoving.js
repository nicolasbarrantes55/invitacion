  
  var paramsPortada = {
    container: document.getElementById("portada"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path : 'data/Portada/data.json'
    ,
  };

  var animPortada;
  animPortada = lottie.loadAnimation(paramsPortada);

  /////////////////////////////////////////////////////////
  var paramsRecepcion = {
    container: document.getElementById("recepcion"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path : 'data/Recepcion/data.json'
    ,
  };

  var animRecepcion;
  animRecepcion = lottie.loadAnimation(paramsRecepcion); 

  /////////////////////////////////////////////////////////
  var paramsRegalo = {
    container: document.getElementById("regalo"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path : 'data/Regalo/data.json'
    ,
  };

  var animRegalo;
  animRegalo = lottie.loadAnimation(paramsRegalo);  

  /////////////////////////////////////////////////////////
  var paramsListaRegalo = {
    container: document.getElementById("regaloLista"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path : 'data/RegaloLista/data.json'
    ,
  };

  var animListaRegalo;
  animListaRegalo = lottie.loadAnimation(paramsListaRegalo);    

  /////////////////////////////////////////////////////////
  var paramsConfirmarAsistencia = {
    container: document.getElementById("confirmarAsistencia"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path : 'data/ConfirmarAsistencia/data.json'
    ,
  };

  var animConfirmarAsistencia;
  animConfirmarAsistencia = lottie.loadAnimation(paramsConfirmarAsistencia);

/////////////////////////////////////////////////////////
  var paramsCierre = {
    container: document.getElementById("cierre"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path : 'data/Cierre/data.json'
    ,
  };

  var animCierre;
  animCierre = lottie.loadAnimation(paramsCierre);

  //////////////////////////////////////////////////////////

  var copyTextareaBtn = document.getElementById("copyIban");

  copyTextareaBtn.addEventListener('click', function(event) {

    navigator.clipboard.writeText("9600004359").then(function() {
      /* clipboard successfully set */
    }, function() {
      /* clipboard write failed */
    });

    /* Alert the copied text */
    alert("Texto copiado: 9600004359");
  });
