<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->foreignId('customer_id')->references('id')->on('customers');
            $table->string('event_type')->nullable();
            $table->string('instructor')->nullable();
            $table->integer('num_of_attendance')->default(0);
            $table->double('budget');
            $table->double('expenses');
            $table->double('revenue');
            $table->string('target_segment');
            $table->foreignId('created_by')->references('id')->on('users');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
