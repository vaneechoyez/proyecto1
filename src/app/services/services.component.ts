import { Component } from '@angular/core';
import { JasonplaceholderService } from '../apiservices/jasonplaceholder.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
 posts:any = [];


constructor(private jasonplaceholderService: JasonplaceholderService) {this.jasonplaceholderService.allPost().subscribe(data =>
{//console.log('All Posts:', data);})
this.posts = data;
   });
  }
}
