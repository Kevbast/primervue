<template>
  <div>
    <h1>METODOS FILTERS</h1>
    <ul>
        <li v-for="number in numbers" :key="number">Número:{{number}}
            Doble:{{ $filters.getNumeroDoble(number)}}
        </li>
    </ul>
    <ul>
        <li v-for="nombre in nombres" :key="nombre">Nombre{{ nombre }}
            MAYÚSCULA:{{ $filters.mayuscula(nombre) }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"MetodosFilters",
    data(){
        return{
            numbers:[63,54,42,36,27,19],
            nombres:["Aida","Mateo","David","Raúl"]

        }
    },


}
</script>

<style>

</style>