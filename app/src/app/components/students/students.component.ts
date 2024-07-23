import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/service/model/student';
import { StudentsService } from 'src/app/service/students.service';
import { Router } from '@angular/router';

@Component({
    selector:    'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
    public students: Student[] = [];

    constructor(
        private studentsService: StudentsService,
        private router: Router,
    ) {}

    private loadStudents(searchString?: string): void {
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
    public getGradeColour(grade: number): string {
        if (grade > 80) {
            return 'green';
        } else if (grade > 50) {
            return 'orange';
        } else {
            return 'red';
        }
    }

    public viewStudent(id: number | string): void {
        this.router.navigate(['/students', id]);
    }

    public onSearch(searchString: string): void {
        this.loadStudents(searchString);
    }

    public onReset(): void {
        this.loadStudents();
    }
}
