<template>
    <div v-if="errors != ''">
        {{ errors }}
    </div>
    <form @submit.prevent="saveCustomer">
        <div class="space-y-6">
            <label for="name" class="block">Nom de client</label>
            <input type="text" id="name" v-model="customer.name">
        </div>
        <div>
            <label for="tel" class="block">Tel. de client</label>
            <input type="text" id="tel" v-model="customer.tel">
        </div>
        <div>
            <label for="is_favorite">favori ?</label>
            <input type="checkbox" id="is_favorite" v-model="customer.is_favorite">
        </div>
        <button type="submit" style="color: green">mettre a jour</button> 
    </form>
</template>


<script>
import { onMounted, reactive } from 'vue'
import useCustomers from '../services/customerservices.js'


export default {


    props: {
        id: {
            required: true,
            type: String
        }
    },
    setup (props) {

        const {getCustomer,customer,errors,updateCustomer} = useCustomers();
        onMounted(getCustomer(props.id));
        const saveCustomer = async () => {
            await updateCustomer(props.id);
        }
        return {
            saveCustomer,errors,customer
        }
    }
}
</script>
