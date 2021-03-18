import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogconnectService } from 'src/app/services/blogconnect.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
blogs:Blog[];
  constructor(public blogService:BlogconnectService) {
    this.blogs=[];
   }

  ngOnInit(): void {

    this.blogService.getBlogs().subscribe(
      res=> console.log(res),
      err=> console.log(err)
    )
  }

}
