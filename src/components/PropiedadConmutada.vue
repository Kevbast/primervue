<template>
    <div>
        <h1>Propiedad conmutada</h1>
        <h2>Lista de juegos de mesa:</h2>
        <ul>
            <li style="display: flex;" v-for="game in juegosRojos" :key="game" v-html="game"></li>
        </ul>
        <ul>
            <li style="display: flex;" v-for="game in juegos" :key="game">{{ game }}</li>
        </ul>
    </div>
</template>

<script>
export default {
name:"PropiedadConmutada",
computed:{
    //SE ESCRIBE COMO UN MÉTODO PERO SE UTILIZA COMO UNA PROPIEDAD
        juegosRojos(){
            var datos= this.juegos;
            var i =0;
            //hay que hacerlo con of,ya que si lo hacemos con in recorre los indices
            for(var game of this.juegos){
                var juegoRojo ="<span style='color:red'>"+game+"</span>";
                datos[i]=juegoRojo;
                i++;
            }
            return datos;
        }
},
data(){
    return{
        juegos:["Monopoly","Canicas","UNO","La galleta"]
    }
}
}
</script>

<style>

</style>