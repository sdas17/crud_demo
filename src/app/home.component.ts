import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homeComponent',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private activatedRoute:ActivatedRoute){
    console.log(activatedRoute.snapshot.paramMap.get('name'));
    console.log(activatedRoute.paramMap.subscribe((item)=>{
      console.log(item.get('name'));
      
    }));
    
    
  };
  

}
