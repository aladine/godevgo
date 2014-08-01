<?php

class QuestionController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$questions = Question::where('user_id', Auth::user()->id)->get();
 
	    return Response::json(array(
	        'error' => false,
	        'questions' => $questions->toArray()),
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
		
		$question = new Question;
		// return 'here';
	    $question->question = Request::get('question');
	 // 	Log::info($question->question);
		// return 'here';

	    $question->description = Request::get('description');
	    // Log::info($question->description);
		// return 'here';
	    $question->user_id = Auth::user()->id;
	 	// Log::warning('Something could be going wrong.');

	    // Validation and Filtering is sorely needed!!
	    // Seriously, I'm a bad person for leaving that out.
	
	    $question->save();
	  // Log::info(json_encode($question));
	 // return 'dds';
	    return Response::json(array(
	        'error' => false,
	        'questions' => $question->toArray()),
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
		 $question = Question::where('user_id', Auth::user()->id)
            ->where('id', $id)
            ->take(1)
            ->get();
 
	    return Response::json(array(
	        'error' => false,
	        'questions' => $question->toArray()),
	        200
	    );
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		 $question = Question::where('user_id', Auth::user()->id)->find($id);
 
	    if ( Request::get('question') )
	    {
	        $question->question = Request::get('question');
	    }
	 
	    if ( Request::get('description') )
	    {
	        $question->description = Request::get('description');
	    }
	 
	    $question->save();
	 
	    return Response::json(array(
	        'error' => false,
	        'message' => 'question updated'),
	        200
	    );
	
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$question = Question::where('user_id', Auth::user()->id)->find($id);
 
	    $question->delete();
	 
	    return Response::json(array(
	        'error' => false,
	        'message' => 'question deleted'),
	        200
	        );
	}


}
