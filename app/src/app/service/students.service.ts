import { Injectable } from '@angular/core';
import { catchError, Observable, of } from "rxjs";
import { Student } from "./model/student";
import { HttpClient } from '@angular/common/http';
import { buildApiUrl } from './helpers/request-helper';

@Injectable({ providedIn: 'root' })
export class StudentsService {
    private readonly apiUrl = buildApiUrl('students');

    constructor(private http: HttpClient) { }

    /**
     * Gets a list of students from our API, optionally
     * filtered by a search string
     * 
     * @param queryString to optionally filter by, partial
     * matches first_name and last_name
     * @returns observable array of students
     */
    public getStudents(queryString?: string): Observable<Student[]> {
        const fullUrl = queryString ? `${this.apiUrl}?search=${queryString}` : this.apiUrl;

        return this.http.get<Student[]>(fullUrl).pipe(
            catchError((error: Error) => {
                console.error('Error fetching students: ', error);
                throw error;
            }),
        );
    }

    /**
     * Gets the specified student from our API if they
     * exist
     * 
     * @param id of the student to get
     * @returns observable student or undefined
     */
    public getStudentById(id: number): Observable<Student | undefined> {
        return this.http.get<Student>(`${this.apiUrl}/${id}`).pipe(
            catchError((error: Error) => {
                console.error(`Error fetching student with id ${id}: `, error);
                throw error;
            }),
        );
    }
}
