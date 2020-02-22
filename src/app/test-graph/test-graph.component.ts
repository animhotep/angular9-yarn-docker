import {Component, OnInit} from '@angular/core';
import {PostsService} from '../shared/posts.service';
import {Observable} from 'rxjs';
import {Post} from '../models/post';


@Component({
  selector: 'app-test-graph',
  templateUrl: './test-graph.component.html',
  styleUrls: ['./test-graph.component.scss']
})

export class TestGraphComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

  getData() {
    delete this.posts;
    setTimeout(() => {
      this.ngOnInit();
    }, 2000);
  }


}
