import { Component, OnInit } from '@angular/core';
import { Student } from '../service/model/student';
import { StudentsService } from '../service/students.service';

@Component({
    selector:    'app-students',
    templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit {
    protected students: Student[] = [];

    constructor(private studentsService: StudentsService) {}

    ngOnInit(): void {
        this.studentsService.getStudents().subscribe({
            next: (data: Student[]) => {
                this.students = data;
            },
            error: (error: Error) => console.error(error),
        });
    }

    getGradeColour(grade: number): string {
        if (grade > 80) {
            return 'green';
        } else if (grade > 50) {
            return 'orange';
        } else {
            return 'red';
        }
    }
}
