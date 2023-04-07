<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
class UserController extends Controller
{
    /**
     * Show a list of all of the application's users.
     */
    public function index()
    {
        
        $users = DB::select('select * from testUser WHERE id = ?', [1]);
        //the view blade file uses the $users
        //view() function is designed to accept an associative array, where each key in the array corresponds to a variable name that you want to make available in the view.
        //return view('test_data', ['users' => $users]);
        return Inertia::render('Database', ['user' => $users]);
    }

    //this function is called whenever there is a http post request , refer to map php 
    public function toggleLedPhp(Request $request)
    {
        $input = $request->all();
        $ledToggle = $input['led']; 
 
        DB::table('testUser')
            ->where('id', $input['id'])
            ->update(['led' => $ledToggle]);
 
        $users = DB::select('select * from testUser WHERE id = ?', [1]);
 
        return ['user'=>$users, 'input'=> $input];
    }


    public function getUserData() 
    {
        $users = DB::select('select * from testUser WHERE id = ?', [1]);
        return ['user'=>$users]; 
    }
}