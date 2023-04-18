<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ReminderController extends Controller
{
    //this function is called whenever there is a http post request , refer to map php 
    public function addHabit(Request $request)
    {
        $input = $request->all();
        $savings = $input['savings']; 
 
        DB::table('testUser')
            ->where('id', $input['id'])
            ->update(['savings' => $savings]);
 
        $users = DB::select('select * from piggyBank WHERE id = ?', [1]);
 
        return ['user'=>$users, 'input'=> $input];
    }

    public function getHabit() 
    {
        $users = DB::select('select * from piggyBank WHERE id = ?', [1]);
        return ['user'=>$users];
    }
}
