<?php

class AnswerController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$answer = Answer::where('user_id', Auth::user()->id)->get();
 
	    return Response::json(array(
	        'error' => false,
	        'answer' => $answer->toArray()),
	        200
	    );
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$answer = new Answer;
		// return 'here';
	    $answer->answer = Request::get('answer');
	 // 	Log::info($answer->answer);
		// return 'here';

	    $answer->description = Request::get('description');
	    // Log::info($answer->description);
		// return 'here';
	    $answer->user_id = Auth::user()->id;
	 	// Log::warning('Something could be going wrong.');

	    // Validation and Filtering is sorely needed!!
	    // Seriously, I'm a bad person for leaving that out.
	
	    $answer->save();
	  // Log::info(json_encode($answer));
	 // return 'dds';
	    return Response::json(array(
	        'error' => false,
	        'answer' => $answer->toArray()),
	        200
	    );
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$answer = Answer::where('user_id', Auth::user()->id)
            ->where('id', $id)
            ->take(1)
            ->get();
 
	    return Response::json(array(
	        'error' => false,
	        'answer' => $answer->toArray()),
	        200
	    );
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	// public function edit($id)
	// {
	// 	//
	// }


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	// public function update($id)
	// {
	// 	//
	// }


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$answer = Answer::where('user_id', Auth::user()->id)->find($id);
 
	    $answer->delete();
	 
	    return Response::json(array(
	        'error' => false,
	        'message' => 'answer deleted'),
	        200
	        );
	}


}
