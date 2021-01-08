import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  constructor(private apollo: Apollo, private http: HttpClient) {
  }

  getPosts() {
    return this.apollo.query({
      query: gql`{
        posts {
          id
          title
          votes
          author {
            id
            firstName
            lastName
          }
        }
      }`,
    }).pipe(map((r: any) => r.data.posts));
  }

  getPhotos() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(
      data => data,
      err => console.log(err)
    );
  }

}
