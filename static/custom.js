var ws = new WebSocket("ws://localhost:8000/ws");

ws.onmessage = function(event) {
   var messages = document.getElementById('messages')
   var message = document.createElement('li')
   const response = JSON.parse(event.data);
   var content = document.createTextNode(response.order + ' ' + response.message)
   message.appendChild(content)
   messages.appendChild(message)
};

function sendMessage(event) {
   input = document.getElementById("messageText")
   var dict = {'message': input.value};
   ws.send(JSON.stringify(dict))
   input.value = ''
   event.preventDefault()
}