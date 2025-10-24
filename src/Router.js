import CicloVida from './components/CicloVida.vue'
import CineComponent from './components/CineComponent.vue'
import DirectivasComponent from './components/DirectivasComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import MusicaComponent from './components/MusicaComponent.vue'
import { createRouter,createWebHistory } from 'vue-router'

//UN ARRAY CON LAS RUTAS DE NAVEGACION
const myRoutes=[
    {path:"/",component:HomeComponent},
    {path:"/cine",component:CineComponent},
    {path:"/musica",component:MusicaComponent},
    {path:"/ciclovida",component:CicloVida},
    {path:"/directivas",component:DirectivasComponent},
]

//CREAMOS UNA VARIBALE PARA EL ROUTER INDICANDO EL TIPO DE NAVEGACION Y LAS RUTAS
const router=createRouter({
    history:createWebHistory(),
    routes:myRoutes
})
//LA CONSTANTE ROUTER ES LA QUE UTILIZARÁ EL FICHERO MAIN.JS
//DEBEMOS EXPORTARLA PARA USARLA
export default router;
