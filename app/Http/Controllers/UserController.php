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
        
        DB::table('testUser')
            ->where('id', 1)
            ->update(['led' => 0]);
        $users = DB::select('select * from testUser WHERE id = ?', [1]);
        //the view blade file uses the $users
        //view() function is designed to accept an associative array, where each key in the array corresponds to a variable name that you want to make available in the view.
        //return view('test_data', ['users' => $users]);
        return Inertia::render('Database', ['user' => $users]);
    }

    public function toggleLedPhp(Request $request)
    {
        
        
        $input = $request->all();
        echo $input['led']; 
 
        $ledToggle = $input['led']; 
 
        DB::table('testUser')
            ->where('id', 1)
            ->update(['led' => $ledToggle]);
 
        $users = DB::select('select * from testUser WHERE id = ?', [1]);
 
        return ['user'=>$users, 'input'=> $input];
    }
}