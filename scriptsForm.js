const ACCESS_TOKEN =
  "ya29.a0Aa4xrXN0z2bKwXxJHOiswZtsGcAGssLZMTycj3oliOJ1VKfxuDkj2MP7WqMpnhphbN0fE6UJVtsRxGalR8yVSyZPGp9XpaX-BVEDs1WZ9iBkxNd0grw0OJ4RI8eW7PRHWnoyyG3IQfZqJ9zIjquw-Uq7Mux0aCgYKATASARASFQEjDvL9fg85ZtXBiNooVPOe1xJ9tQ0163";
 
const SHEET_ID = '1jZLisiV8p35ZTaphIPFQwYX81Y46mSlLyFbTXu1oqjw';

//Inicializamos la fecha a la fecha de hoy
document.getElementById('fecha').valueAsDate = new Date();


function registrarReceta() {

  //Obtenemos los datos del formulario
  const nombreDuenho = document.getElementById('nombre-duenho').value;
  const direccion = document.getElementById('direccion').value;
  const especie = document.getElementById('especie').value;
  const nombreAnimal = document.getElementById('nombre-animal').value;
  const edad = document.getElementById('edad').value;
  const raza = document.getElementById('raza').value;
  const diagnostico = document.getElementById('diagnostico').value;
  const receta = document.getElementById('receta').value;
  const fecha = document.getElementById('fecha').value;
  //const monto = document.getElementById('monto').value;
  
  //Creamos el JSON que espera nuestra API
  let data = {};
  
  let values = [];
  
  let fila = [nombreDuenho, direccion, especie, nombreAnimal,edad, raza, diagnostico, receta, fecha];

  values.push(fila);
  
  //Verificar que coincida con el nombre de la hoja de nuestro sheet
  data.range = "veterinary";
  
  data.majorDimension = "ROWS";
  data.values = values;

  //Invocamos al método POST de la API
  fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/veterinary:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data)
    }
  ).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
  setTimeout(() => {
    location.reload()
  },10000
  )
  
  //Limpiamos los campos del formulario para permitir cargar un nuevo gasto
  //document.getElementById('nombre-duenho').value = "";
  //document.getElementById('direccion').value = "";


  //document.getElementById('fecha').valueAsDate = new Date();
  //document.getElementById('monto').value = "";
};