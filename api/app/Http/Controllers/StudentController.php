<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController
{

    public function index(Request $request)
    {
        $searchString = $request->query('search');
        
        if ($searchString) {
            /* If a search string is provided, partial match on first_name and last_name.
                If an array is provided for 'search', no students will be returned. This
                is intentional to keep default Laravel behaviour and make the API
                more predictable */
            return Student::where('first_name', 'LIKE', "%{$searchString}%")
                            ->orWhere("last_name", "LIKE", "%{$searchString}%")
                            ->get();
        } else {
            // If no search string is provided, return all students
            return Student::all();
        }
    }

    public function show(string $id) {
        return Student::find($id);
    }
}
