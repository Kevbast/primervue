import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
//creamos la variable app para los metodos filters
var app=createApp(App)
app.config.globalProperties.$filters={
    //CREAMOS LOS MÉTODOS QUE DEVOLVERAN UN RESULTADO
    mayuscula(dato){
        return dato.toUpperCase();
    },
    getNumeroDoble(numero){
        return numero*2;
    }
}


app.use(router).mount('#app')
