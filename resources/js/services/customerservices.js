import {ref} from "vue";
import axios from "axios";
import router from "../router/index.js"

export default function useCustomers() {

    const customers = ref([]); // reative 
    const erros = ref('')
    const customer = ref([]);

    const getCustomers = async () => {
        let response = await axios.get('/api/customers');
        customers.value = response.data.data;
    }

    const getCustomer = async (id) => {
        let response = await axios.get('/api/customers/'+id);
        customer.value = response.data.data;
    }

    const updateCustomer = async (id) => {
        erros.value='';
        try {
            await axios.put('/api/customers/'+id,customer.value);
            await router.push ({name: 'customers.index'});
        } catch (error) {
            const createCustomersErrors = error.response.data.erros;
            for (const key in createCustomersErrors){
                erros.value += createCustomersErrors['key'][0] + " ";
            }
        }

    }

    const createCustomers = async (data) => {
        erros.value='';
        try {
            await axios.post('/api/customers',data);
            await router.push ({name: 'customers.index'});
        } catch (error) {
            const createCustomersErrors = error.response.data.erros;
            for (const key in createCustomersErrors){
                erros.value += createCustomersErrors['key'][0] + " ";
            }
        }
    }

    const destroyCustomer = async (id) => {

        if (!window.confirm('Supprimer ce client ?')) return;

        await axios.delete('/api/customers/'+id);
        await getCustomers();
    }

    return {
        customers,
        createCustomers,
        getCustomers,
        erros,
        customer,
        getCustomer,
        updateCustomer,
        destroyCustomer
    };
}