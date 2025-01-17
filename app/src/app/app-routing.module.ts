import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from "./components/students/students.component";
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
    {
        path: 'students',
        component: StudentsComponent,
        title: 'students',
    },
    {
        path: 'students/:id',
        component: StudentComponent,
        title: 'student',
    },
    {
        path: '',
        redirectTo: '/students',
        pathMatch: 'full'
    }, // Default route, redirects to students list
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
