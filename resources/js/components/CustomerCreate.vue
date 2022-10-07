<template>
    <div v-if="errors != ''">
        {{ errors }}
    </div>
    <form @submit.prevent="customerStore">
        <div class="space-y-6">
            <label for="name" class="block">Nom de client</label>
            <input type="text" id="name" v-model="form.name">
        </div>
        <div>
            <label for="tel" class="block">Tel. de client</label>
            <input type="text" id="tel" v-model="form.tel">
        </div>
        <div>
            <label for="is_favorite">favori ?</label>
            <input type="checkbox" id="is_favorite" v-model="form.is_favorite">
        </div>
        <button type="submit">Submit</button> 
    </form>
</template>


<script>
import { reactive } from 'vue'
import useCustomers from '../services/customerservices.js'
// import errors from '../services/customerservices.js'

export default {
     
    setup () {

        const form = reactive({
            name: '',
            tel: '',
            is_favorite: ''
        });
        const {createCustomers,errors} = useCustomers();
        const customerStore = async ()=> {
            await createCustomers({...form});
        }
        return {
            form,customerStore,errors
        }
    } 
    
}
</script>
