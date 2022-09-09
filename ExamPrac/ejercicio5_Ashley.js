class Persona{
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad=edad;
    }

        getDeatalles() {
            return `${this.nombre}nombre , ${this.apellido}, ${this.edad} `;
        }


    }


    class Jugador extends Persona {

        constructor(nombre,apellido, edad, posicion) {
            super(nombre,apellido, edad); 
            this.posicion = posicion;
           }

           getDeatalles(){
            super.getDeatalles(); //Reusar el codigo de la clase base
            return `${this.posicion} `;
          }
         }



         class Entrenador extends Persona {

            constructor(nombre,apellido, edad, exp, id_fede) {
                super(nombre,apellido, edad); 
                this.exp = exp;
                this.id_fede=id_fede;
                if(id_fede=== ""){
                    this.id_fede= function aleatorio() {
                        var minm = 5;
                        var maxm =5 ;
                        id_fede = Math.floor(Math
                        .random() * (maxm - minm + 1)) + minm;
                    }
                }
               }
    
               getDeatalles(){
                super.getDeatalles(); 
                return `${this.exp} expriencia , ${this.id_fede}  `;
              }
             }



  
             class equipo extends Persona {

                constructor(nombre,apellido, edad, posicion) {
                    super(nombre,apellido, edad); 
                    this.posicion = posicion;
                   }
        
                   getDeatalles(){
                    super.getDeatalles(); //Reusar el codigo de la clase base
                    return `${this.posicion} `;
                  }
                 }
        
