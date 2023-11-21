const listaUsuario = document.getElementById('listaUsuarios')


//creamos una funcion que nos devuelva una edad aleatoria

 function edad(){
    const edadAleatoria =Math.floor(Math.random()*80)
    return edadAleatoria
 }
//creamos la funcion que nos devuelva los  datos de los usuarios

function generarUsuario () {
fetch('https://jsonplaceholder.typicode.com/users')
.then ((response) => {
    if(!response.ok) {
        throw new Error('Algo fallo, intentelo más tarde');
    }
    return response.json();
})
.then((data) => {
console.log(data)

data.forEach(usuario => {
    const {id, name,username,email,phone, company,address,} =usuario
    //separamos los elementos de objeto adrees y los metemos en un array
    const{city,street,suite} =address
const direccion =[city,street,suite]

console.log(direccion)

    const usuariosAleatorios =`
    <li class='tarjeta'>
    <div class='datos'>
    <div class='datosPersonales'> 
     <p><span>Nombre: </span>${name}</p>
     <p><span>Edad:</span> ${edad()} años</p>
      <p><span>Nombre Usuario:</span>${username}
     <p><span>Telefono:</span> ${phone}</p>
     <p><span>Correo electronico:</span> ${email}</p>
     </div>
        <img src='./assets/img/${id}.jpeg'>
        </div>
        <div class='texto'>
    <p><span>Compañia :</span>${company.name}</p>
    <p><span>Direccion:</span>${direccion}</p>
    </div>
</li>
    `   
    listaUsuario.innerHTML += usuariosAleatorios
});


})
}

generarUsuario()