<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOffersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('company')->unsigned();
            $table->foreign('company')->references('id')->on('companies');
            $table->bigInteger('service')->unsigned();
            $table->foreign('service')->references('id')->on('services');

            $table->string('benefits');
            $table->string('fields');
            $table->string('tariff');
            $table->integer('points')->default(0);
            $table->enum('type',['private','company']);

            $table->bigInteger('department')->unsigned();
            $table->foreign('department')->references('id')->on('departments');
            $table->bigInteger('municipality')->unsigned();
            $table->foreign('municipality')->references('id')->on('municipalities');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offers');
    }
}