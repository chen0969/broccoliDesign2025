import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Framework from '../views/Framework-page.vue'
import Contact from '../views/Contact.vue'
import Resume from '../views/Resume.vue'
import HelloWorld from '../../src/components/HelloWorld.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/framework', component: Framework },
    { path: '/contact', component: Contact },
    { path: '/resume', component: Resume },
    {path: '/hello', component: HelloWorld}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
