<?php

namespace Tests\Feature;

use App\Http\Class\Status;
use App\Models\Member;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MemberCrudTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test creating a new member using member request.
     *
     * @return void
     */
    public function test_create_member()
    {
        // Enable authorization for the test
        $this->withoutExceptionHandling();

        $response = $this->post('/api/members', [
            'name'          => 'John Doe',
            'title'         => 'Mr.',
            'age'           => 30,
            'email'         => 'john@example.com',
            'phone'         => '1234567890',
        ]);

        $response->assertStatus(201);

        $this->assertDatabaseHas('members', [
            'name'          => 'John Doe',
            'title'         => 'Mr.',
            'age'           => 30,
            'email'         => 'john@example.com',
            'phone'         => '1234567890',
            'status'        => Status::getCode('Unclaimed'),
        ]);
    }

    /**
     * Test getting a list of all members using GET request.
     *
     * @return void
     */
    public function test_get_all_members()
    {
        $response = $this->get('/api/members');

        $response->assertStatus(200);

        $response->assertJsonStructure([
            'body' => [
                'data' => [
                    '*' => [
                        'id',
                        'name',
                        'title',
                        'age',
                        'email',
                        'phone',
                        'status',
                    ],
                ],
            ],
        ]);
    }

    /**
     * Test getting a single member by ID using GET request.
     *
     * @return void
     */
    public function test_get_single_member()
    {
        $member = Member::factory()->create();

        $response = $this->get('/api/members/' . $member->id);

        $response->assertStatus(200);

        $response->assertJsonStructure([
            'body' => [
                'data' => [
                    'id',
                    'name',
                    'title',
                    'age',
                    'email',
                    'phone',
                    'status',
                ]
            ]
        ]);

    }

    /**
     * Test updating a member by ID using PUT request.
     *
     * @return void
     */
    public function test_update_member()
    {
        $member = Member::factory()->create();

        $response = $this->put('/api/members/' . $member->id, [
            'name'          => 'Jane Doe',
            'title'         => 'Ms.',
            'age'           => 25,
            'email'         => 'jane@example.com',
            'phone'         => '9876543210',
            'status'        => 'SendToTherapist',
        ]);

        $response->assertStatus(200);

        $this->assertDatabaseHas('members', [
            'id' => $member->id,
            'name' => 'Jane Doe',
            'title' => 'Ms.',
            'age' => 25,
            'email' => 'jane@example.com',
            'phone' => '9876543210',
            'status' => Status::getCode('SendToTherapist')
        ]);
    }

    /**
     * Test deleting a member by ID using DELETE request.
     *
     * @return void
     */
    public function test_delete_member()
    {
        $member = Member::factory()->create();

        $response = $this->delete('/api/members/' . $member->id);

        $response->assertStatus(200);

        $this->assertDatabaseMissing('members', [
            'id' => $member->id,
        ]);
    }



}
