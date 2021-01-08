import {Component, OnInit} from '@angular/core';
import {PostsService} from "../shared/services/posts.service";
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users;
  users1;

  constructor(private postsService: PostsService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.users = this.http.get('https://jsonplaceholder.typicode.com/users');

    this.http.get('https://jsonplaceholder.typicode.com/users').toPromise().then((r: any) => {
      this.users1 = r.map(u => `${u.name} == ${u.email}`);
    });
  }

}
