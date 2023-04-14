<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

// +----+---------+-------------+-------+
// | id | savings | goal_amount | goal  |
// +----+---------+-------------+-------+
// |  1 |       0 |           0 | mouse |
// +----+---------+-------------+-------+


class PiggyController extends Controller
{
    //
    
    /**
     * Show a list of all of the application's users.
     */
    public function index()
    {
        
        $users = DB::select('select * from piggyBank WHERE id = ?', [1]);
        //the view blade file uses the $users
        //view() function is designed to accept an associative array, where each key in the array corresponds to a variable name that you want to make available in the view.
        //return view('test_data', ['users' => $users]);
        return Inertia::render('PiggyBank', ['user' => $users]);
    }

    //this function is called whenever there is a http post request , refer to map php 
    public function editGoal(Request $request)
    {
        $input = $request->all();
        $savings = $input['savings']; 
 
        DB::table('testUser')
            ->where('id', $input['id'])
            ->update(['savings' => $savings]);
 
        $users = DB::select('select * from piggyBank WHERE id = ?', [1]);
 
        return ['user'=>$users, 'input'=> $input];
    }

    public function getBankData() 
    {
        $users = DB::select('select * from piggyBank WHERE id = ?', [1]);
        return ['user'=>$users];
    }



}
