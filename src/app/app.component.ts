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
  blog:any;
  constructor(public blogService:BlogconnectService) {
    this.blogs=[];
    this.blog= new Blog("","","","","");
   }

  ngOnInit(): void {

    this.blogService.getBlogs().subscribe(
      res=> this.blogs=res,
      err=> console.log(err)
    )
  }

  onSubmit(post:any){
    
    let blogGuardar=
   {"titulo":post.value.titulo,
  "categoria": post.value.categoria,
  "descripcionFoto": post.value.descripcionFoto,
  "nombreFoto": post.value.nombreFoto,
  "texto": post.value.texto};


    
  this.blogService.createBlog(blogGuardar).subscribe((data:any)=>{
      console.log(data)
  })
  }

}
