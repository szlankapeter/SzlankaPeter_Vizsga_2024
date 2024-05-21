<?php

namespace App\Http\Controllers;

use App\Models\SzavakModel;
use Illuminate\Http\Request;

class SzavakController extends Controller
{
    //

    public function getSzavak(){
        $szavak = SzavakModel::all();
        return $szavak;
    }

    
}
