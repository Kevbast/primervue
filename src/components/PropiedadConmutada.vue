<template>
    <div>
        <h1>Propiedad conmutada</h1>
        <label>Introduzca número:</label>
        <!-- va a dar error por el v-model -->
        <input type="number" v-model="numero"/>
        <div v-html="evaluarNums"></div>

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
    evaluarNums(){
        let data="";
        if(this.numero%2==0){
            data= "<h4 style='color:green'>Par:"+ this.numero+"</h4>";
        }else{
            data= "<h4 style='color:red'>Impar:"+ this.numero+"</h4>";
        }
        return data;
    },
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
data(){//DATA 
    return{
        numero:0,
        juegos:["Monopoly","Canicas","UNO","La galleta"]
    }
}
}
</script>

<style>

</style>