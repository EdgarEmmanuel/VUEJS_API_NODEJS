import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Cars from '../components/Cars.vue';
import Nature from '../components/Nature.vue';
import searchPage from '../components/searchResultPage.vue';

const routes =[
  {path:"/",component:Home},
  {path:"/cars",component:Cars},
  {path:"/nature",component:Nature},
  { path: "/search/:id", component: searchPage }
]

var Router =  new VueRouter({
  mode: 'history',
  routes
});


export default Router;