// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Heads from './views/heads.vue'
import list from './views/list.vue'
import news from './views/news.vue'
import Home from './views/home.vue'
import Footers from './views/footers.vue'
import Dlogs from './views/dlogs.vue'
import login from './views/login.vue'

//路由组件
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'



/**组件库引入 */
import Element from 'element-ui'
import './components/lib/theme-default/index.css'
Vue.use(Element)


/**iscs样式引入 */
require('./style/iscs-style.css');
require('./style/page.css');

//注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)

// 路由 
const routes = [{
        path: '/list',
        component: list
    }, {
        path: '/news',
        component: news
    }, {
        path: '/',
        component: Home
    }, {
        path:'/dlog',
        component: Dlogs
    }, {
        path:'/login',
        component: login
    }
];
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

const app = new Vue({
    router,
    components: {
        heads:Heads,
        footers:Footers
    }
}).$mount('#app');
// router.start(App, '#app');
