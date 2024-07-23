import { Component, OnInit } from '@angular/core';
import { Student } from '../../../service/model/student';
import { StudentsService } from '../../../service/students.service';
import { Router } from '@angular/router';

@Component({
    selector:    'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
    protected students: Student[] = [];

    constructor(
        private studentsService: StudentsService,
        private router: Router,
    ) {}

    loadStudents(searchString?: string): void {
        this.studentsService.getStudents(searchString).subscribe({
            next: (data: Student[]) => {
                this.students = data;
            },
            error: (error: Error) => console.error(error),
        });
    }

    ngOnInit(): void {
        this.loadStudents();
    }

    /* If this needed to be reused among more than 1 component,
        it could be relocated to a helper .ts file */
    getGradeColour(grade: number): string {
        if (grade > 80) {
            return 'green';
        } else if (grade > 50) {
            return 'orange';
        } else {
            return 'red';
        }
    }

    viewStudent(id: number | string): void {
        this.router.navigate(['/students', id]);
    }

    onSearch(searchString: string): void {
        this.loadStudents(searchString);
    }

    onReset(): void {
        this.loadStudents();
    }
}
