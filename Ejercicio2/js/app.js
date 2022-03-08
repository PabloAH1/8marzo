


function funcionAlturas(){

    let alturaTotal=0,alturaX=1;
    let h1Promedio=document.getElementById('h1Promedio');   
    let numPersonas=prompt('Introduzca el número de personas a calcular: ');  
  
    while (alturaX<=numPersonas) {        
        let altura=parseInt(prompt('Introduzca la altura de la persona '&&alturaX));         
        alturaTotal=alturaTotal+altura;      
        alturaX++;
    }       
    h1Promedio.textContent="Altura promedio: "+alturaTotal/numPersonas;   
};



