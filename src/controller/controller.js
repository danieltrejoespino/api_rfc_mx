
const options = {
  test : (req,res) => {

//falta validar que si se envien todos los datos

    
    const nombre = req.body.nombre.toUpperCase()
    const aPaterno = req.body.aPaterno.toUpperCase()
    const aMaterno = req.body.aMaterno.toUpperCase()
    const fechaNac = req.body.fechaNac
 
     
    let primerLetraAP= aPaterno.substring(0,1)
    let primerLetraAM= aMaterno.substring(0,1)
    let primerLetraNom= nombre.substring(0,1)

    let primerVocalAP=''
    for (let i = 0; i < aPaterno.length; i++) {
      if (/[AEIOU]/.test(aPaterno.charAt(i))) {
        primerVocalAP = aPaterno.charAt(i);
        break;
      }      
    }

    let anio = fechaNac.substring(2, 4)
    let mes = fechaNac.substring(5, 7) 
    let dia = fechaNac.substring(8, 10) 


console.log(dia);




    let rfc=primerLetraAP+primerVocalAP+primerLetraAM+primerLetraNom+anio+mes+dia

      res.json(rfc);

  }
}


module.exports = {
  options
}