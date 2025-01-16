import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quadratic',
  templateUrl: './quadratic.component.html',
  styleUrls: ['./quadratic.component.scss']
})
export class QuadraticComponent implements OnInit {

  input = { A: 0, B: 0, C: 0 };
  result: any = null;
  apiUrl = 'http://localhost:24293/api/quadratic/calculate'; // Update to match your API URL

  constructor(private http: HttpClient) {}

  solveEquation() {
    this.http.post(this.apiUrl, this.input).subscribe(
      response => {
        this.result = response;
      },
      error => {
        console.error(error);
        this.result = { message: 'An error occur solving equation.' };
      }
    );
  }

  ngOnInit(): void {
  }

}
