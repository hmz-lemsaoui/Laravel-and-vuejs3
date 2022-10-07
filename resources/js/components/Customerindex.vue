<template>
    <div class="overflow-x-auto">
        <div>
            <router-link :to="{name: 'customers.create'}" style="background-color: green">creer un client</router-link>
        </div>
        <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">Nom</th>
                                <th class="py-3 px-6 text-left">telephone</th>
                                <th class="py-3 px-6 text-center">Is favorite ?</th>
                                <th class="py-3 px-6 text-center"></th>
                                <!-- <th class="py-3 px-6 text-center"></th> -->
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                            <template v-for="customer in customers" :key="customer.id">
                                <tr class="border-b border-gray-200 hover:bg-gray-100">
                                    <td class="py-3 px-6 text-left whitespace-nowrap">
                                        <span class="font-medium" v-text="customer.name"></span>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <span class="font-medium" v-text="customer.tel"></span>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <span class="font-medium" v-text="customer.is_favorite"></span>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <router-link :to="{name: 'customers.edit',params: {id: customer.id} }" style="color: green">edit</router-link>
                                    </td>
                                    <button @click="deleteCustomer(customer.id)" style="color: green">supprimer</button>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { onMounted } from 'vue';
import  useCustomers  from '../services/customerservices.js';
export default {
    setup() {
        const {customers , getCustomers,destroyCustomer} = useCustomers();
        const deleteCustomer = async (id) => {
            await destroyCustomer(id);
        }
        onMounted(getCustomers());

        return {
            customers,deleteCustomer
        }
    }
}
</script>