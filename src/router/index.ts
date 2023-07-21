import { RouteRecordRaw , createRouter, createWebHistory} from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias:"/usuarios",
        name: 'usuarios',
        component:() => import('@/components/list-users.vue'),
    },
    {
        path: '/usuarios/nuevos',
        name: 'creado-usuarios',
        component:() => import('@/components/creat-users.vue'),
    },
    {
        path: '/usuarios/:id',
        name: 'Detalle-usuarios',
        component:() => import('@/components/edit-users.vue'),
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;