<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Testing\RefreshDatabase;

class WebRoutesTest extends TestCase
{
    use RefreshDatabase;

    public function test_root_url_returns_welcome_view()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertViewIs('welcome');
    }

    public function test_dashboard_returns_view_for_authenticated_users()
    {
        $user = \App\Models\User::factory()->create();
        $this->actingAs($user);

        $response = $this->get('/dashboard');

        $response->assertStatus(200);
        $response->assertViewIs('dashboard');
    }

    public function test_dashboard_redirects_unauthenticated_users_to_login()
    {
        $response = $this->get('/dashboard');

        $response->assertStatus(302);
        $response->assertRedirect('/login');
    }

    public function test_authenticated_users_can_access_profile_edit_page()
    {
        $user = \App\Models\User::factory()->create();
        $this->actingAs($user);

        $response = $this->get(route('profile.edit'));

        $response->assertStatus(200);
        $response->assertViewIs('profile.edit');
    }

    public function test_authenticated_users_can_update_profile()
    {
        $user = \App\Models\User::factory()->create();
        $this->actingAs($user);

        $updatedData = [
            'name' => 'Updated Name',
            'email' => 'updated@example.com',
        ];

        $response = $this->patch(route('profile.update'), $updatedData);

        $response->assertStatus(302);
        $response->assertRedirect(route('profile.edit'));

        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'name' => 'Updated Name',
            'email' => 'updated@example.com',
        ]);
    }

    public function test_authenticated_users_can_delete_profile()
    {
        $user = \App\Models\User::factory()->create();
        $this->actingAs($user);

        $response = $this->delete(route('profile.destroy'));

        $response->assertStatus(302);
        $response->assertRedirect('/');

        $this->assertDatabaseMissing('users', ['id' => $user->id]);
    }

    public function test_dashboard_route_has_auth_and_verified_middleware()
    {
        $routes = Route::getRoutes();
        $dashboardRoute = $routes->getByName('dashboard');

        $this->assertNotNull($dashboardRoute);
        $this->assertTrue($dashboardRoute->middleware()->contains('auth'));
        $this->assertTrue($dashboardRoute->middleware()->contains('verified'));
    }
}
