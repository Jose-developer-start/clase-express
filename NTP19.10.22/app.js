const formulario = document.getElementById('formulario')
const mensaje = document.getElementById('mensaje');
let listaMensajes = document.getElementById('list-mensajes')
const contenido = document.getElementById('contenido')

let mensajes = []


function ListenerForm(){
    
    formulario.addEventListener('submit',onSubmitEventForm)
}

document.addEventListener('DOMContentLoaded', ()=>{
    ListenerForm()
})

function onSubmitEventForm(e){
    e.preventDefault();
    if(mensaje.value === ""){
        const messageError = document.createElement("p")
        messageError.textContent = 'El mensaje esta vacio'
        messageError.style.color = "red"
        messageError.style.fontSize = "18px"
        contenido.appendChild(messageError)
        setTimeout(()=>{
            messageError.remove()
        },1000)
    }
    //Define object
    const objMessages = {
        id: Date.now(),
        texto: mensaje.value
    }
    mensajes.push(objMessages)
    console.log(mensajes)

}