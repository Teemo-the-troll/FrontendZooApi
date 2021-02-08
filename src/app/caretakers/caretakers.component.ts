import {Component, OnInit} from '@angular/core';
import {Caretaker} from '../caretaker';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-caretakers',
  templateUrl: './caretakers.component.html',
  styleUrls: ['./caretakers.component.scss']
})
export class CaretakersComponent implements OnInit {

  caretakers: Caretaker[] = [];
  url = 'http://localhost:4200/ZooApi/api/caretakers';

  firstName = '';
  lastName = '';
  gender = '';

  constructor(private http: HttpClient, private router: Router) {
    this.updateCaretakers();
  }

  updateCaretakers(): void {
    this.http.get(this.url).subscribe(
      (data: Caretaker[]) => {
        this.caretakers = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );

  }

  createCaretaker(): void {
    const body = {
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
    };
    this.http.post(this.url, body, {observe: 'response'}).subscribe(
      (data) => {
        console.log(data);
        this.updateCaretakers();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  goToCaretaker(id: number): void {
    this.router.navigateByUrl('detail/' + id);
  }


  ngOnInit(): void {
  }

}
