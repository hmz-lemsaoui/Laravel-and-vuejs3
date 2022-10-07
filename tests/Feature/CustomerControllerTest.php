<?php

namespace Tests\Feature;

use App\Models\Customer;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CustomerControllerTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @test
     */
    public function itListCustomers()
    {
        $response = $this->get('/api/customers');

        $response->assertOk();
        dd($response->json());
    }
    /**
     * @test
     */

    public function itCreateCustomers(){

        $response = $this->post('api/customers', [
            'name' => 'mon premire client',
            'tel' => '06xxxxxx',
            'is_favorite' => true
        ]);
        $response->assertOk();
        $customers = Customer::all();
        $frist = Customer::first();

        $this->assertEquals(1,$customers->count());
        $this->assertEquals('mon premire client', $frist->name);

    } 
    /**
        * @test
    */
    public function itValidateFailds(){
        $response = $this->post('api/customers', [
            'name' => '',
            'tel' => '',
            'is_favorite' => ''
        ]);
        dd($response);
        $response->assertSessionHasErrors(['name','tel','is_favorite']);
    }

    /**
     * @test
     */
    public function itUpdateCustomer() {
        $this-> seed(); // on va seeder database 
        $customer = Customer::first();
        $response = $this->put('/api/customers/' . $customer->id,[
            'name' => 'nom edite',
            'tel' => '09xxxx',
            'is_favorite' => true
        ]);
        $updatedCustomer = Customer::find ($customer->id);
        $this->assertEquals("nom edite",$updatedCustomer->name);
        $response->assertOk();
    }
    /**
     * @test
     */

    public function itDeleteCustomer(){
        $this->seed();
        $customer = Customer::first();
        $response = $this->delete('/api/customers/' . $customer->id);
        $response -> assertNoContent();
    }

}
