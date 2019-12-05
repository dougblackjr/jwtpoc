<?php

namespace App\Policies;

use App\User;
use App\Item;
use Illuminate\Auth\Access\HandlesAuthorization;

class ItemPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    public function create(User $user)
    {

        return $user->can('create');

    }

    public function read(User $user)
    {

        return $user->can('read');

    }

    public function update(User $user)
    {

        return $user->can('update');

    }

    public function delete(User $user)
    {

        return $user->can('delete');

    }

}
