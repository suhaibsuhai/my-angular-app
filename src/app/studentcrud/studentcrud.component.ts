import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentcrud',
  templateUrl: './studentcrud.component.html',
  styleUrls: ['./studentcrud.component.scss']
})
export class StudentcrudComponent implements OnInit {

  StudentArray: any[] = [];
  id: string = '';
  name: string = '';
  description: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent() {
    this.http.get<any[]>("http://localhost:8081/api/items")
      .subscribe(
        (resultData: any[]) => {
          console.log(resultData);
          this.StudentArray = resultData;
        },
        (error) => {
          console.error('Error fetching students:', error);
        }
      );
  }

  setUpdate(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
  }

  UpdateRecords() {
    let bodyData = {
      "id": this.id,
      "name": this.name,
      "description": this.description
    };

    this.http.put(`http://localhost:8081/api/items/${this.id}`, bodyData)
      .subscribe(
        (resultData: any) => {
          console.log(resultData);
          alert("Student Updated");
          this.resetForm();
          this.getAllStudent();
        },
        (error) => {
          console.error('Error updating student:', error);
        }
      );
  }

  setDelete(data: any) {
    this.http.delete(`http://localhost:8081/api/items/${data.id}`)
      .subscribe(
        (resultData: any) => {
          console.log(resultData);
          alert("Student Deleted");
          this.getAllStudent();
        },
        (error) => {
          console.error('Error deleting student:', error);
        }
      );
  }

  save() {
    if (this.id =this.id) {
      this.register();
    } else {
      this.UpdateRecords();
    }
  }

  register() {
    let bodyData = {
      "id":this.id,
      "name": this.name,
      "description": this.description
    };

    this.http.post("http://localhost:8081/api/items", bodyData)
      .subscribe(
        (resultData: any) => {
          console.log(resultData);
          alert("Student Registered Successfully");
          this.resetForm();
          this.getAllStudent();
        },
        (error) => {
          console.error('Error registering student:', error);
        }
      );
  }

  resetForm() {
    this.id = '';
    this.name = '';
    this.description = '';
  }
}
