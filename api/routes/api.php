<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('students', [\App\Http\Controllers\StudentController::class, 'index'])->name('students.index');
Route::get('students/{id}', [\App\Http\Controllers\StudentController::class, 'show'])->name('students.show');