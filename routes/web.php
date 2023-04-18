<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PiggyController;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/Reminder', function () {
    return Inertia::render('ReminderApp');
});



Route::get('/piggyBank',[PiggyController::class,'index']); 
Route::post('/piggyBankEdit',[PiggyController::class,'edit']); 
Route::get('/piggyBankData',[PiggyController::class,'getBankData']); 


Route::get('/database',[UserController::class,'index']);
Route::post('/databasefuck',[UserController::class,'toggleLedPhp']);
Route::get('/getUserData',[UserController::class,'getUserData']);
