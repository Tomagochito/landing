let loaded = (eventLoaded) => {
    window.alert("landing page loaded");
    console.log(eventLoaded);
    let myform = document.getElementById('miFormulario');
    myform.addEventListener("submit", handleSubmit);
    debugger;
  }
  document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (event) => {
      event.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('correo').value;
      const modoAprendizaje = document.getElementById('modo-aprendizaje').value;
      const comentario = document.getElementById('floatingTextarea').value;
  
      const datos = {
        nombre: nombre,
        email: email,
        modoAprendizaje: modoAprendizaje,
        comentario: comentario
      };
  
      fetch('https://recursos-6f043-default-rtdb.firebaseio.com/Mods-Plattform.json', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        // Aquí puedes agregar código para mostrar un mensaje de éxito o redirigir a otra página, etc.
      })
      .catch(error => console.error('Error al enviar los datos:', error));
    });
  });
  
  

  
  
  async function obtenerDatos() {
    const url = "https://recursos-6f043-default-rtdb.firebaseio.com/Mods-Plattform.json";
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      console.error("Error:", respuesta.status);
      return;
    }
    const map = new Map();
    const datos = await respuesta.json();
    for (const key in datos) {
      const elemento = datos[key];
      map.set(key, elemento);
      console.log("Clave:", key, "Valor:", elemento);
    }

    const tableBody = document.getElementById('tablebody');
    tableBody.innerHTML = ""; // Limpiar el contenido previo de la tabla

    for (const [key, value] of map) {
      let persona = value.nombre;
      let curso = value.modoAprendizaje; // Cambiado de eleccionmodfav a modoAprendizaje según el último código
      let resena = value.comentario;
      let template = `
        <tr>
          <td>${persona}</td>
          <td>${curso}</td>
          <td>${resena}</td>
        </tr>
      `;
      tableBody.insertAdjacentHTML('beforeend', template);
    }
  }

  document.addEventListener("DOMContentLoaded", obtenerDatos);
  