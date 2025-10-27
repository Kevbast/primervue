<template>
  <h1>PAR IMPAR VUE</h1>
  <label>Introduzca un número</label>
  <input type="text" v-model="numero"/><br>
   <!-- CONDICIONALES DENTRO DE LA ETIQUETA -->
  <h3 v-if="numero %2==0" style="color: greenyellow;">Par</h3>
  <h3 v-else-if="numero %2 != 0" style="color: red;">Impar</h3>
  <button @click="nuevoNum()">Generar num</button>

</template>

<script>
export default {
name:"ParImpar",
data(){
    return{
        numero:0,
    }
},
methods:{
    nuevoNum(){
        this.numero= Math.floor((Math.random()*100)+1);
        console.log(this.numero);
    }
}
}
</script>

<style>

</style>