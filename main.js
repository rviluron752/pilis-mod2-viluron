/* REGISTRO */
function onClick (event) {
    event.preventDefault();

    const mensaje = {
      comercio: document.getElementById('comercio').value,
      titular: document.getElementById('titular').value,
      cel: document.getElementById('cel').value
    }
    console.log(mensaje);
  
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => { 
          console.log(json);
          Swal.fire(
              'Enviado',
              'Gracias por tu comentario', 
              'success'
          );
          cleanForm();
      })
      .catch((err) => console.log(err));
  
  }

  function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
}


let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

/* CLIMA */

window.addEventListener('load', ()=> {

  let temperaturaValor = document.getElementById('temperatura-valor')  
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion')  
  
  let ubicacion = document.getElementById('ubicacion')  

  let vientoVelocidad = document.getElementById('viento-velocidad') 


  
         fetch('https://api.openweathermap.org/data/2.5/weather?lat=-24.18323&lon=-65.33132&appid=8a0ac197158eff75656aa29e79bc01f6')
          .then( response => { return response.json()})
          .then( data => {
              //console.log(data)
              
              let temp = Math.round((data.main.temp)-274.15)

              temperaturaValor.textContent = `${temp} ° C`

              let desc = data.weather[0].description
              temperaturaDescripcion.textContent = desc.toUpperCase()
              ubicacion.textContent = data.name
              
              vientoVelocidad.textContent = `${data.wind.speed} m/s`
              
              //para iconos estáticos
              /* icon = data.weather[0].icon
              let urlIcon = 'http://openweathermap.org/img/wn/$icon.png'                     
              icono.src = urlIcon */
              //console.log(data.weather[0].icon)

          })
          .catch( error => {
              console.log(error)
          })
     })
        