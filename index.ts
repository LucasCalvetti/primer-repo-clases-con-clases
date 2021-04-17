class Departamento {
    nombreDelDepto: string;
    constructor(nombreDelDepto:string) {
        this.nombreDelDepto = nombreDelDepto;
    }
    getName(){return this.nombreDelDepto;}
}
class Piso {
    name:string;
    departamentos:Departamento[]
    constructor(name:string) {
        this.name = name;
        this.departamentos = [];
    }
    pushDepartamento(departamento: Departamento){return this.departamentos.push(departamento);}
    getDepartamento(){return this.departamentos;}
}
class Edificio {
    pisos: Piso[]
    constructor(pisos:Piso[]){
        this.pisos = pisos;
    }
    addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
    const pisoEncontrado = this.pisos.find(p=>{if(p.name === nombreDePiso){
        return true;
        }else
        {
            throw "err - no existe ese piso";
        }})
        return pisoEncontrado.pushDepartamento(departamento);
    }
    getDepartamentosByPiso(nombreDePiso:string) {
        const pisoEncontrado = this.pisos.find(p=>{return p.name == nombreDePiso});
        return pisoEncontrado.getDepartamento()
    }
    }

    // no modificar este test
function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
  }
  main();