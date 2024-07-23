import { HttpClientModule } from "@angular/common/http";
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentComponent } from './components/student/student.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
              declarations: [
                  AppComponent,
                  StudentsComponent,
                  StudentComponent,
                  SearchComponent,
              ],
              imports:      [
                  BrowserModule,
                  AppRoutingModule,
                  HttpClientModule,
              ],
              providers:    [],
              bootstrap:    [ AppComponent ],
          })
export class AppModule {}
