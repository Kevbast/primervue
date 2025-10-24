<template>
    <div>
        <h1 class="titulos1">Mi primer vue jeje</h1>
        <h2>Su nombre es:{{nombre}}</h2>
        <h3>{{msg}}</h3>
        <img src="./../assets/images/bicho.png" alt="" srcset="">
        
    </div>    
</template>
<script>
//VUE UTILIZA CODIGO JS(ESPECIAL)
//CADA COMPONENT QUE GENEREMOS DEBE DE TENER UN NOMBRE OBLIGATORIO
//Y DEBEMOS EXPORTARLO CON DICHO NOMBRE.EL name ES LA ETIQUETA QUE UTILIZARAN OTROS COMPONENTES PARA DIBUJAR
export default{
    name:"HolaMundo",
    data(){
        //LAS VARIABLES SON DECLARADAS EN FORMATO JSON
        //DENTRO DE UN RETURN
    
        return{
            nombre:"Alumno77",
            edad:21,
            miArray:[],
            objeto:{
            }
        }
    },//final data
    props: {
    msg: String
  }


}

</script>

<style>
 @import './../assets/css/estilos.css';

</style>