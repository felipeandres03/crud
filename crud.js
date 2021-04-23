
let serieActual = 0;
 

let cars = [{

        numserie: 0,
        marca: "mercedes benz",
        modelo:"amg gt",
        color:"negro",
        año:"2015",
        precio: 50000, 
    },
    {

        numserie: 1,
        marca: "Bmw",
        modelo:"amg gt",
        color:"negro",
        año:"2015",
        precio: 50000, 
    },
]

// ========================== pintar añadir y eliminar y editar ==========================


function generateserie(){
    let counter = 0;
    cars.forEach((car) => {
        if(car.numserie> counter){
            counter = car.numserie;
        }
    })
    return counter += 1
}

function print(datacar){

    const container= document.getElementById("prueba") 
    container.innerHTML = "";
    datacar.forEach((car)=> {

            const htmlcontainer = `<div class="col-4 mt-3">
                                        <div class="card w-100 h-100" >
                                        <img src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg" class="card-img-top" alt="mercedez benz">
                                        <div class="card-body text-center">
                                            <div class="col-12">
                                                <h3>${car.numserie}</h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-6 d-flex">
                                                    <p>${car.marca}</p>
                                                </div>
                                                <div class="col-6 d-flex flex-nowrap">
                                                    <p>${car.modelo}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6 d-flex">
                                                    <p>${car.año}</p>
                                                </div>
                                                <div class="col-6 d-flex flex-nowrap">
                                                    <p>${car.color}</p>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <h2>${car.precio}</h2>
                                            </div>
                                            <button class="btn btn-danger" onclick="deletecar(${car.numserie})">delete</button>
                                            <button class="btn btn-warning" onclick="editcar(${car.numserie})">edit</button>
                                        </div>
                                    </div>
                        
                                 </div>`;
                
    container.innerHTML += htmlcontainer;                   
    });

}

print (cars);


function addcar(){

        const marcacar = document.getElementById("marca").value
        const modelocar = document.getElementById("modelo").value
        const colorcar = document.getElementById("colorr").value
        const añocar = document.getElementById("año").value
        const preciocar = document.getElementById("precio").value
    
        newcar = {
            numserie: generateserie(),
            marca: marcacar,
            modelo:modelocar,
            color:colorcar,
            año:añocar,
            precio:preciocar,
        }
        camparate(newcar);
        resetform();
        closeform();
        print(cars);
    
}


function deletecar(serie){
    let index = cars.findIndex((car) => car.numserie === serie)
    cars.splice(index, 1);
    print(cars)
}



function editcar (serie) {
    
    document.getElementById("guardar").classList.remove("d-none")
    document.getElementById("enviar").classList.add("d-none")
    openform();


    
    let index = cars.findIndex((car) => car.numserie === serie);

    const marcacar = document.getElementById("marca").value = cars[index].marca;
    const modelocar = document.getElementById("modelo").value = cars[index].modelo;
    const colorcar = document.getElementById("colorr").value = cars[index].color;
    const añocar = document.getElementById("año").value = cars[index].año;
    const preciocar = document.getElementById("precio").value = cars[index].precio
    serieActual = serie;

    
}


const guardar  = () => {

    const btnGuardar = document.getElementById("guardar");

    btnGuardar.addEventListener('click', () => {
        
        const marca = document.getElementById("marca").value 
        const modelo = document.getElementById("modelo").value
        const color = document.getElementById("colorr").value 
        const año = document.getElementById("año").value 
        const precio = document.getElementById("precio").value 
        const numserie = serieActual;

        let newCar = {
            numserie,
            marca,
            modelo,
            color,
            año,
            precio,
        }

        cars.splice(numserie, 1, newCar);
        print(cars);
        resetform();
        closeform();
        return alert("Actualizado")
    })

}





// =========================================utilidades===============================================

function openform (){
    document.getElementById("create-user-container").classList.remove("d-none"); 

}

function resetbottons(){
    document.getElementById("enviar").classList.remove("d-none");
    document.getElementById("guardar").classList.add("d-none");
}

function closeform (){

    document.getElementById("create-user-container").classList.add("d-none");
}

function resetform(){
    const r =  document.getElementById("reset").reset(); 
}


// ======================================== 

function camparate (newvh){

    const result = cars.filter((car) => car.marca === newvh.marca && car.modelo === newvh.modelo)
    
    if ( result.length > 0){

        alert(" ya existe")
        
        // return deletecar(newcar);
    }

    else{

        cars.push(newvh);
    }

}

guardar();