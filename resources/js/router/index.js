import {createRouter , createWebHistory } from "vue-router";
import Customerindex from "../components/Customerindex.vue";
import CustomerCreate from "../components/CustomerCreate.vue";
import CustomerEdit from "../components/CustomerEdit.vue";

const routes = [
    {
        path: '/dashboard',
        name: 'customers.index',
        component: Customerindex
    },
    {
        path: '/customers/create',
        name: 'customers.create',
        component: CustomerCreate
    },
    {
        path: '/customers/:id/edit',
        name: 'customers.edit',
        props: true,
        component: CustomerEdit
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});


