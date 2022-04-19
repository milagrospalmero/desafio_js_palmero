
let maximo_calorias = parseInt(prompt("Ingrese la Cantidad Máxima de Calorías"));
let suma_calorias = 0;



for (i=0; i<6; i++) {
    let comida = prompt("Ingrese el plato que vas a comer:");
    let calorias = parseInt(prompt("Ingrese la cantidad de calorías que contiene: " + comida));
    suma_calorias += calorias;

    if (suma_calorias > maximo_calorias) {
        alert("Superaste el consumo máximo de calorías!");
        break;
        } else { 
            let restan_calorias = maximo_calorias - calorias ;
            alert("Te quedan " + restan_calorias + " calorías por consumir" );
            
        breack;  
        }
    }    
