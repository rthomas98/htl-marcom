<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // Create permissions
        $permissions = [
            // User management
            'view users',
            'create users',
            'edit users',
            'delete users',
            
            // Role management
            'view roles',
            'create roles',
            'edit roles',
            'delete roles',
            
            // Permission management
            'view permissions',
            'create permissions',
            'edit permissions',
            'delete permissions',
            
            // Content management
            'manage content',
            'publish content',
            'edit content',
            
            // Client management
            'view clients',
            'create clients',
            'edit clients',
            'delete clients',
            
            // Case management
            'view cases',
            'create cases',
            'edit cases',
            'delete cases',
            
            // Document management
            'view documents',
            'create documents',
            'edit documents',
            'delete documents',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        // Create roles and assign permissions
        
        // Super Admin
        $superAdminRole = Role::create(['name' => 'super-admin']);
        $superAdminRole->givePermissionTo(Permission::all());

        // Administrator
        $adminRole = Role::create(['name' => 'administrator']);
        $adminRole->givePermissionTo([
            'view users', 'create users', 'edit users',
            'view roles', 'edit roles',
            'view permissions',
            'manage content', 'publish content', 'edit content',
            'view clients', 'create clients', 'edit clients',
            'view cases', 'create cases', 'edit cases',
            'view documents', 'create documents', 'edit documents',
        ]);

        // Attorney
        $attorneyRole = Role::create(['name' => 'attorney']);
        $attorneyRole->givePermissionTo([
            'view clients', 'create clients', 'edit clients',
            'view cases', 'create cases', 'edit cases',
            'view documents', 'create documents', 'edit documents',
            'manage content', 'publish content', 'edit content',
        ]);

        // Staff
        $staffRole = Role::create(['name' => 'staff']);
        $staffRole->givePermissionTo([
            'view clients',
            'view cases',
            'view documents', 'create documents',
            'edit content',
        ]);

        // Client
        $clientRole = Role::create(['name' => 'client']);
        $clientRole->givePermissionTo([
            'view documents',
        ]);
    }
}
