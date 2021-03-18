import { Component } from '@angular/core';
import { Blog } from './models/blog';
import { BlogconnectService } from './services/blogconnect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pablo';
  blogs:any;
  constructor(public blogService:BlogconnectService) {
    this.blogs=[];
   }

  ngOnInit(): void {

    this.blogService.getBlogs().subscribe(
      res=> this.blogs=res,
      err=> console.log(err)
    )
  }

}
