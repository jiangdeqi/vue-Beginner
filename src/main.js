// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'

/**组件库引入 */
import Element from 'element-ui'
import './components/lib/theme-default/index.css'
Vue.use(Element)


/**iscs样式引入 */
require('./style/iscs-style.css');
require('./style/page.css');


/* 引入首页模板 */
new Vue({
  el: '#app',
  render: h => h(App)
})
