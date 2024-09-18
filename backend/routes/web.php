<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VuesyController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', [App\Http\Controllers\HomeController::class, 'index']);
    
    Route::get('users', [UserController::class, 'index'])->name('users-index');   
    Route::get('delete-users/{id}', [UserController::class, 'destroy'])->name('delete-user');   
    Route::get('users-edit/{id}', [UserController::class, 'edit'])->name('users-edit');   
    Route::post('users-update/{id}', [UserController::class, 'update'])->name('user-update');   
    
    Route::get('roles', [RoleController::class, 'index'])->name('show-roles');   
    Route::get('roles-create', [RoleController::class, 'create'])->name('create-roles');   
    Route::post('store-roles', [RoleController::class, 'store'])->name('store-roles');   
    Route::get('edit-role/{id}', [RoleController::class, 'edit'])->name('roles.edit');   
    Route::post('update-role/{id}', [RoleController::class, 'update'])->name('roles.update');   
    Route::get('delete-role/{id}', [RoleController::class, 'destroy'])->name('roles.destroy');   

    Route::get('{any}', [App\Http\Controllers\VuesyController::class, 'index'])->name('index');
});


