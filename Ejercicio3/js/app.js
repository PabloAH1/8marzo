function funcionSalarios(){

    let numEmpleados=prompt('Introduzca el número de empleados: '); 
    let salario=0,salarioMin=0,salarioMax=0,total=0;
         
    for (let empleado = 1; empleado <= numEmpleados; empleado++) {
        salario=parseInt(prompt('Introduzca el salario del empleado número '+empleado)); 
        total=total+salario;
        if(salario>100 && salario<300)  salarioMin++;
        else salarioMax++;;       
    }
    h1_100_300.textContent="Número de empleados que cobran entre (100-300): "+salarioMin; 
    h1_Mas300.textContent="Número de empleados que cobran más de 300: "+salarioMax; 
    h1_SalariosTotal.textContent="La empresa se gasta en salarios: "+total; 
};


