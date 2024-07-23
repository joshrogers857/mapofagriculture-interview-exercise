import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/service/model/student';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public student: Student | undefined;

  constructor (
    private route: ActivatedRoute,
    private studentsService: StudentsService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.studentsService.getStudent(id).subscribe({
      next: (data: Student | undefined) => {
        this.student = data;
      },
      error: (error: Error) => console.error(error),
    });
  }
}
