// import index from 'Pages/index/index.vue';
export default {
    routes: [
        {
            path: '/index',
            // component: index
            component: () => import(/* webpackChunkName: "pages/index/index" */'Pages/index/index.vue')
        }
    ]
}
