

let elegirProducto;
let seguir;
let total = 0;
let formaDePago;
let totalPago;
let cuotas;

function seleccionPago() { 
formaDePago = prompt('El total de su compra es de $'+total + '\nSeleccione la forma de pago:\n1-Efectivo | Mercado pago\n2-Debito\n3-Tarjeta de credito')
    if(formaDePago == "1"){
        totalPago = total - (total * 0.10);
        alert('Por abonar en efectivo o con mercado pago recibiste un descuento del 10%, el total a abonar es de $'+totalPago);
    }else if(formaDePago == "2"){
        alert('El total a pagar es de $' + total);
    }else if(formaDePago == "3"){

        do {
            cuotas = prompt('Indique en cuantas cuotas desea pagar: \n3 cuotas - Recargo del 10%.\n6 cuotas - Recargo del 35%');
             if(cuotas == "3"){
            totalPago = total + (total * 0.10);
        alert('El total a pagar son 3 cuotas de $' + totalPago);
        }else if(cuotas == "6"){
            totalPago = total + (total * 0.35);
            alert('El total a pagar son 6 cuotas de $' + totalPago);
        }else{
            alert('Solo se puede abonar en 3 o 6 cuotas')
        }
        } while (cuotas != "3" && cuotas != "6");
    }else{
        alert('Por favor elija una opción valida')
    }
 }



function venta() {
// 1- Solicitar seleccion de producto y sumar el toal.
    do {
        elegirProducto = parseInt(prompt('Ingrese el codigo del producto:\n1-Camiseta de Independiente - $50.000.\n2-Short de futbol - $25.000.\n3-Buzo retro Argentina 1994 - $35.000.\n4-Camiseta de Messi - $120.000'));

        switch (elegirProducto) {
            case 1:
                total += 50000
                alert('Agregaste el producto Camiseta de Independiente a tu 🛒, el total de tu compra es $' + total)
                break;

            case 2:
                total += 25000
                alert('Agregaste el producto Short de futbol a tu 🛒, el total de tu compra es $' + total)
                break;
            case 3:
                total += 35000
                alert('Agregaste el producto Buzo retro Argentina 1994 a tu 🛒, el total de tu compra es $' + total)
                break;
            case 4:
                total += 120000
                alert('Agregaste el producto Camiseta de Messi a tu 🛒, el total de tu compra es $' + total)
                break;

            default:
                alert('Codigo invalido')
                break;
        }
        seguir = confirm('Queres comprar otro producto?');

    } while (seguir);
// 2- Solicitar medio de pago y mostrar el total con los descuentos.      
seleccionPago();

}

 venta();