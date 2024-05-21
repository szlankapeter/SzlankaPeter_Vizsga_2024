<?php

namespace App\Http\Controllers;

use App\Models\TemaModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TemaController extends Controller
{
    //

    public function getTemas(){
        $temas = TemaModel::all();
        return $temas;
    }

    public function szavakTemaSzerint($temaId){
        return DB::table("tema_models")
        ->join("szavak_models", "szavak_models.temaId", "=", "tema_models.id")
        ->where("temaId", "=", $temaId)
        ->get();
    }
}
