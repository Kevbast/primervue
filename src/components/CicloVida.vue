<template>
  <div>
    <h1>Ciclo de vida y métodos VUE </h1>
    <h2>Mensaje escondido{{ mensaje2 }}</h2>
    <button @click="cambiarMensaje()">{{mensaje }}</button>
  </div>
</template>

<script>
export default {
    name:"CicloVida",
    data(){
        return{
            mensaje:"hoy es viernesss!!!",
            mensaje2:""
        }
    },
    methods:{
        //AQUÍ INCLUIMOS NUESTROS MÉTODOS PERSONALIZADOS
        cambiarMensaje(){
            //PARA ACCEDER A LAR VARIABLE DE DATA DEL COMPONENT
            //DEBEMOS UTILIZAR LA PALABRA this
            this.mensaje="Holaaa"
        }
    },
    mounted(){
        console.log("COMPONENTE MOUNTED")
    },
    created(){
        console.log("COMPONENTE CREADO")
    },
    updated(){
        console.log("COMPONENTE UPDATED")
    },
    unmounted(){
        console.log("COMPONENTE UNMOUNTED")
    }
}
</script>
