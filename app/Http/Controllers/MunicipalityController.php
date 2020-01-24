<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Municipality;
use App\Department;

class MunicipalityController extends Controller
{

    public function getAll(){
		$municipalities = DB::table('municipalities')->get();
		if (!$municipalities) return response()->json('Error en la base de datos',500);
		return response()->json($municipalities, 200);
	}

	public function getByDepartment($departmentId){
		$department = Department::find($departmentId);
		if (!$department) return response()->json('Departamento no encontrado',404);
		$municipalities = DB::table('municipalities')->where('department_id',$departmentId)->get();
		if (!$municipalities) return response()->json('Error en la base de datos',500);
		return response()->json($municipalities, 200);
	}

}
