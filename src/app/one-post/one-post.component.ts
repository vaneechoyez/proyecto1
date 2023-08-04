import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {JasonplaceholderService} from '../apiservices/jasonplaceholder.service';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent {
public post:any;
public comments: any;

 constructor(private jasonplaceholderService: JasonplaceholderService,
  private ruta : ActivatedRoute){

    this.ruta.paramMap.subscribe((params: ParamMap) => {
      this.onePost(params.get('id'));
  });
  } 

  onePost(id: any){
    this.jasonplaceholderService.onePost(id).subscribe(data=>{
      this.post=data;
  });

 this.jasonplaceholderService.commentsPost(id).subscribe(data=>{
      this.comments=data;
  });


 
  
}}
