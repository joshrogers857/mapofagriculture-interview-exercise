<?php

namespace App\Http\Controllers;

use App\Models\Student;

class StudentController
{

    public function index()
    {
        return Student::all();
    }

    public function show(int $id) {
        return Student::find($id);
    }

}
