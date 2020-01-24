<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Service;

class ServiceController extends Controller{

  public function newService(Request $request){
    $data = $request->all();
    $validation = Validator::make($data, [
      'name' => ['required', 'string', 'min:6', 'max:128', 'unique:services'],
      'fields' => ['required', 'json'],
    ]);
    if ($validation->fails()){
      return response()->json($validation->errors(), 400);
    }

    $service = Service::create($data);
    if (!$service) return response()->json('Error en la base de datos', 500);
    return response()->json('Servicio creado satisfactoriamente', 201);
  }

  public function editService($id, Request $request){
    $data = $request->all();
    $validation = Validator::make($data, [
      'name' => ['string', 'min:6', 'max:128'],
      'fields' => ['json'],
    ]);
    if ($validation->fails()){
      return response()->json($validation->errors(), 400);
    }
    $service = Service::find($id);
    if (!$service) return response()->json('Servicio no encontrado',404);

    $keysAllow = [
      'name',
      'fields'
    ];

    foreach ($keysAllow as $key){
      if (isset($data[$key])){
        $service->{$key} = $data[$key];
      }
    }
    if (!$service->save()){
      return response()->json('Error en la base de datos', 500);
    }

    return response()->json('Servicio editado satisfactoriamente', 200);
  }

  public function getAll(){
		$services = DB::table('services')->where('trash',0)->get();
		if (!$services) return response()->json('Error en la base de datos',500);
		return response()->json($services, 200);
	}

	public function getService($id){
		$service = Service::find($id);
		if (!$service) return response()->json('Servicio no encontrado',404);
		$service = DB::table('services')->where('id',$id)->where('trash',0)->first();
		if (!$service) return response()->json('Servicio no encontrado',404);
		return response()->json($service, 200);
	}

	public function deleteService($id){
		$service = Service::find($id);
		if (!$service) return response()->json('Servicio no encontrado',404);
		$service->trash = 1;
		if (!$service->save()) return response()->json('Error en la base de datos',500);
		return response()->json('Servicio eliminado satisfactoriamente', 200);
	}

}
