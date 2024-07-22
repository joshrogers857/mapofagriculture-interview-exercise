import { Injectable } from '@angular/core';
import { catchError, Observable, of } from "rxjs";
import { Student } from "./model/student";
import { HttpClient } from '@angular/common/http';
import { buildApiUrl } from './helpers/request-helper';

@Injectable({ providedIn: 'root' })
export class StudentsService {
    private apiUrl = buildApiUrl('students');

    constructor(private http: HttpClient) { }

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.apiUrl).pipe(
            catchError((error: Error) => {
                console.error('Error fetching students: ', error);
                return of([]); // Return an empty array if an error occurs
            }),
        );
    }
}
