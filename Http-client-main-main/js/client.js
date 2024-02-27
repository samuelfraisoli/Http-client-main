var message_mine_counter = 0;


/**
 * Función que funciona como main, se carga cuando se ha cargado toda la página
 */
document.addEventListener("DOMContentLoaded", function mainJS() {
  console.log("entra a function mainJS()");

  // Ejecuto mi función send_message() cuando se clican el botón de enviar
  document
    .getElementById("conversation__submit-button")
    .addEventListener("click", print_message);
  

});


/**
 * Función para imprimir el mensaje que envía el usuario en el cuadro de mensajes. Mete el mensaje en texto en un span y un div, para respetar el diseño
 */
function print_message() {
  console.log("entra a print_message()");

  // Coge el mensaje y lo guarda en la variable message
  let message = document.getElementById("conversation__textbox").value;
  console.log(message);

  if (!(message === "")) {
    // Creo el div
    let div_message = createElement(
      "div",
      "class",
      "conversation__message-box conversation__message-box--mine",
      "id",
      "conversation__message-box--mine" + message_mine_counter
    );
    

    // Creo el span
    let span_message = createElement(
      "span",
      "class",
      "conversation__message-span conversation__message-span--mine",
      "id",
      "conversation__message-span--mine" + message_mine_counter
    );

    // Creo el texto del mensaje
    let p_message = createElement(
      "p",
      "class",
      "conversation__message-text conversation__message-text--mine",
      "id",
      " conversation__message-text--mine" + message_mine_counter
    );
    
    // Le doy al mensaje el valor que he guardado en la variable message (el mensaje del usuario)
    p_message.textContent = message;

    // Pego el div dentro de la caja de chats, luego pego el span dentro del div y luego pego el p dentro del span
    document.getElementById("conversation__chat").appendChild(div_message);
    document
      .getElementById("conversation__message-box--mine" + message_mine_counter)
      .appendChild(span_message);
    document
      .getElementById("conversation__message-span--mine" + message_mine_counter)
      .appendChild(p_message);

    // Cuando he terminado todo, sumo +1 al contador para que el siguiente mensaje enviado tenga la misma id pero +1
    message_mine_counter++;
    console.log(message_mine_counter);

    document.getElementById("conversation__textbox").value = "";
  }
}


/**
 * Esta función crea un JSON con el mensaje del usuario y lo manda a la base de datos
 */
function send_message() {
  console.log("entra a send_message()");

  let message = document.getElementById("conversation__textbox").value;
  console.log(message);
}


/**
 * Esta función recibe el mensaje del otro usuario en formato JSON, lo saca y lo imprime para que lo vea el usuario. Lo mete en un span y un div para respetar el formato de la página
 */
function receive_and_print_message(){
  console.log("entra a receive_and_print_message()")
}


/**
 * 
 * Función para crear elementos HTML con dos atributos
 */
function createElement(element, attribute1, value1, attribute2, value2) {
  let el = document.createElement(element);
  let att1 = document.createAttribute(attribute1);
  att1.value = value1;
  el.setAttributeNode(att1);

  let att2 = document.createAttribute(attribute2);
  att2.value = value2;
  el.setAttributeNode(att2);

  return el;
}
