<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserJobsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user_jobs', function(Blueprint $table)
		{
			$table->increments('id');

$table->integer('user_id');			
$table->integer('job_id');	
$table->integer('total_score');	
$table->string('status');	
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
		Schema::drop('user_jobs');
	}

}
