<?php

use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class UserSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{

		$permissions = [
			'create',
			'read',
			'update',
			'delete',
		];

		foreach ($permissions as $p) {
			Permission::create(['name' => $p]);
		}

		$users = [
			[
				'name'		=> 'Admin',
				'email' 	=> 'admin@example.com',
				'password' 	=> 'password',
				'role'		=> [
					'create',
					'read',
					'update',
					'delete',
				],
			],
			[
				'name'		=> 'Creator',
				'email' 	=> 'creator@example.com',
				'password' 	=> 'password',
				'role'		=> [
					'create',
					'read',
					'update',
				],
			],
			[
				'name'		=> 'Reader',
				'email' 	=> 'reader@example.com',
				'password' 	=> 'password',
				'role'		=> 'read',
			],
		];

		foreach ($users as $u) {
			$user = User::create([
				'name'		=> $u['name'],
				'email'		=> $u['email'],
				'password'	=> Hash::make($u['password'])
			]);

			$user->givePermissionTo($u['role']);
		}

	}

}
