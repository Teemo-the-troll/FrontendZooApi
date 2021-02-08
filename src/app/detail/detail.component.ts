import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Caretaker} from '../caretaker';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  caretaker: Caretaker;

  url = '';
  newFirstName = '';
  newLastName = '';
  newGender = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.router = router;
    this.route.params
      .subscribe(params => {
        this.url = 'http://localhost:4200/ZooApi/api/caretakers/' + params.id;

        this.http.get(this.url)
          .subscribe((data: Caretaker) => {
            this.caretaker = data;
          }, (error: HttpErrorResponse) => {
            if (error.status === 404) {
              this.router.navigate(['caretakers']);
            }
          });
      });
  }

  navigateHome(): void {
    this.router.navigateByUrl('caretakers');
  }

  delete(): void {
    this.http.delete(this.url).subscribe(
      (data: Caretaker) => {
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
    this.navigateHome();
  }

  edit(body): void {
    this.http.put(this.url, body, {observe: 'response', responseType: 'json'}).subscribe(
      (data) => {
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  editFirstName(): void {
    const body: Caretaker = this.caretaker;
    body.firstName = this.newFirstName;
    this.edit(body);
    this.navigateHome();

  }

  editLastName(): void {
    const body = this.caretaker;
    body.lastName = this.newLastName;
    this.edit(body);
    this.navigateHome();
  }

  editGender(): void {
    const body = this.caretaker;
    body.gender = this.newGender;
    this.http.put(this.url, body, {observe: 'response', responseType: 'json'}).subscribe(
      (data) => {
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
    this.navigateHome();
  }


  ngOnInit(): void {
  }

}
