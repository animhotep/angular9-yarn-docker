import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Post} from '../models/post';



@Component({
  selector: 'app-test-graph',
  templateUrl: './test-graph.component.html',
  styleUrls: ['./test-graph.component.scss']
})
export class TestGraphComponent implements OnInit {
  public posts: Post[];
  loading = true;

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.apollo.query<any>({
      query: gql`
        query allPosts {
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
        }
      `,
    })
      .subscribe(result => {
        console.log(result);
        this.posts = result.data && result.data.posts;
        this.loading = result.loading;
      });
  }

  getData(): void {
    this.posts = [];
  }
}
