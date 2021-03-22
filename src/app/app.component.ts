import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
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
  fileToUpload:any;
  limite:number=4;  
  constructor(public blogService:BlogconnectService) {
    this.blogs=[];
    this.blog= new Blog("","","","","");
    this.fileToUpload=null;
   }

  ngOnInit(): void {

    this.blogService.getBlogs().subscribe(
      res=> this.blogs=res,
      err=> console.log(err)
    )
  }

  onSubmit(post:any){
    console.log(post);
    let blogGuardar=
   {"titulo":post.value.titulo,
  "categoria": post.value.categoria,
  "descripcionFoto": post.value.descripcionFoto,
  "nombreFoto": this.fileToUpload.name,
  "texto": post.value.texto};


    let elId:string="";
  this.blogService.createBlog(blogGuardar).subscribe((data:any)=>{
      console.log(data)
       elId=data._id;
       console.log(this.fileToUpload);
       this.blogService.putPhoto(elId,this.fileToUpload).subscribe((data)=>{
        console.log(data);
      })
  })


  }

  handleFileInput(files:any){
    console.log(files.target.files.item(0));
    this.fileToUpload=files.target.files.item(0);
  }

  editBlog(id:string){
    
    this.blogService._id=id;
  }

  deleteBlog(id:string){
    this.blogService._id=id;
    this.blogService.deleteBlog().subscribe((data:any)=>{
      console.log(data);
    })
    this.ngOnInit();
  }

}
