import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  constructor(private apollo: Apollo) {
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

}
