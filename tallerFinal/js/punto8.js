/* 8. Un empleado de la empresa autoAlarte desea saber cuánto será el pago de
su nómina este mes. Los pagos de los empleados se hacen sumando el
sueldo básico = 1.400.000 + la Comisión por ventas.
Para hallar el valor de la comisión se tiene la cantidad de ventas de los
empleados durante el mes.
• Si el empleado vende 0 millones en autos o accesorios, la comisión
será 0.
• Si el empleado vende entre 1 millón y 30 millones, la comisión será
del 5% de la venta.
• Si el empleado vende entre 31 millones y 50 millones, la comisión será
del 15% de la venta.
• Si el empleado vende mas de 51 millones la comisión será del 20% de
la venta.
Se deberá pedir al usuario la cantidad en ventas, calcular cuánto sería el total
a pagar al empleado e imprimir el salario total del empleado incluyendo el
sueldo y la comisión ganada. (Este algoritmo se desarrolla con
condicional if ). */

var cVentas = parseFloat(prompt("Ingrese la cantidad de ventas: "))
var sBasico = 1400000
var comVentas = 0
var total = 0

console.log ("La cantidad de ventas que ingresaste fué: "+cVentas)

if (cVentas==0){
    comVentas == cVentas * 0
} else {
    if (cVentas>=1000000 && cVentas<=30000000 ){
        comVentas = cVentas * (5/100)
    } else {
        if (cVentas>=31000000 && cVentas<=50000000) {
            comVentas = cVentas * (15/100)
        }else {
            comVentas = cVentas * (20/100)
        }
    }
}

total = sBasico + comVentas


console.log ("El salario básico es: "+sBasico)
console.log ("La comision ganada es: "+comVentas)
console.log ("EL salario total es es: "+total)
