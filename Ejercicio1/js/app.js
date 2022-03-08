


function funcionNotas(){

    let numNotas=1,nota,mayores=0,menores=0;
    let h1Mayores=document.getElementById('mayores');
    let h1Menores=document.getElementById('menores');
  
    while (numNotas<=10) { 
       
        nota=prompt('Introduzca la nota '+numNotas); 
        if (nota>=7) {           
            mayores=mayores+1; 
        } 
        else { 
            menores=menores+1; 
        } 
        numNotas++;
    } 
    h1Mayores.textContent="Notas mayores o iguales a 7: "+mayores;
    h1Menores.textContent="Notas Menores a 7: "+menores;
};



