//obtener el direcotio actual ==> nombre del repo predete
//comprobar si existe directorio ==> para saber si la carpeta
// ya es un repo de git, buscando .git

const fs = require("fs");
const path = require("path");

module.exports = {
  //como nuestra aplicacion es global, solo queremos el nombre del
  //dir en el q estamos(current)
  getCurrentDirectoryBase : ()=>{
    return path.basename(process.cwd());
  },

  directoryExist : (filePath)=>{
    //usamos statSync para verificar si existe un arch o dir
    //isDirectory condirma q es dir
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err){
      return false;
    }

  }
};