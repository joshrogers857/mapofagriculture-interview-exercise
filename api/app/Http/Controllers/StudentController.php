<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

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
            $students = Student::where('first_name', 'LIKE', "%{$searchString}%")
                            ->orWhere("last_name", "LIKE", "%{$searchString}%")
                            ->get();
        } else {
            // If no search string is provided, return all students
            $students = Student::all();
        }

        return response()->json($students, Response::HTTP_OK);
    }

    public function show(string $id) {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['error' => 'Student not found'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($student, Response::HTTP_OK);
    }
}
