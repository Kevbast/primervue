<template>
  <h1>DIRECTIVAS VUE EJEMPLOS</h1>
  <h3>{{ $data }}</h3>
  <label>Introduzca un número</label>
  <input type="number" v-model="numero"/>
  <input type="text" v-model="nombre"/><br>
  <!-- AÑADIMOS UNA SERIE -->
  <label for="">Serie nueva:</label>
  <input type="text" v-model="serieNueva"/>
  <button @click="nuevaSerie()">Insertar</button>
  <!-- CONDICIONALES DENTRO DE LA ETIQUETA -->
  <h3 v-if="numero > 0" style="color: greenyellow;">Positivo</h3>
  <h3 v-else-if="numero < 0" style="color: red;">Negativo</h3>
  <h3 v-else style="color: brown;">Es 0</h3>

<h4 v-if="series.length>0" style="color: darkblue;">LISTA DE SERIES</h4>
  <ul v-if="series.length>0" style="display: inline">
        <li v-for="serie in series" :key="serie">
            {{ serie }}
        </li>
  </ul>
</template>

<script>
export default {
    name:"DirectivasComponent",
    data(){
        return{
            numero:0,
            nombre:"Kevbast",
            series:["Los Simpsons","Stranger Things","Smiling Friends","Gumball"],
            serieNueva:""
        }
    },
    methods:{
        nuevaSerie(){
            this.series.push(this.serieNueva)
        }
    }

}
</script>

<style>

</style>