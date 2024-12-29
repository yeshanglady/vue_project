import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import TablePreview from './components/TablePreview.vue'
import DirtyItems from './components/DirtyItems.vue'
import App from './App.vue'
import Rule from "./components/RulePage.vue";
import RuleAdd from  "./components/RuleAdd.vue"
import {createPinia} from "pinia";
const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/tablePreview',
        name: 'tablePreview',
        component: TablePreview
    },
    {
        path:'/rule',
        name:'rule',
        component:Rule
    },
    {
        path:"/dirtyItems",
        name:"dirtyItems",
        component:DirtyItems
    },
    {
        path:"/ruleAdd",
        name:"ruleAdd",
        component: RuleAdd
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const defaultTitle = 'ChainCleanser';
    document.title =  defaultTitle;
    document.images
    next();
});

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
