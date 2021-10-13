import {createApp, VueElement} from 'vue'
import App from './App.vue'

// the server hostname
VueElement.prototype.$hostname = 'http://192.168.0.104:3030/'

createApp(App).mount('#app')



