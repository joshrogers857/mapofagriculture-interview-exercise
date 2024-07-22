import { Injectable }     from '@angular/core';
import { Observable, of } from "rxjs";
import { Student }        from "./model/student";
import { MOCK_STUDENTS } from './data/mock-students';

@Injectable({ providedIn: 'root' })
export class StudentsService {

    constructor() { }

    getStudents(): Observable<Student[]> {
        return of<Student[]>(MOCK_STUDENTS);
    }

}
