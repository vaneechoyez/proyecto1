import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JasonplaceholderService {

 url='https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient) { }

  allPost(){
    return this.http.get(this.url + 'posts');
   }

   onePost(id:number){
    return this.http.get(this.url + 'posts/' + id );
  
   }

  commentsPost(id:number){
    return this.http.get(this.url + 'posts/' + id + '/comments');
  
   }


  allAlbumes(){
    return this.http.get(this.url + 'albums');
   }

}
