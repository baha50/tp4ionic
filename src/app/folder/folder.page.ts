import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoldserviceService } from './foldservice.service';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public data :any []
  constructor(private activatedRoute: ActivatedRoute,public fd:FoldserviceService) {
    this.fd.get().subscribe((response:any) => {
      console.log(response);
      this.data=response;
    })
   }


  ngOnInit() {
    
     
  }


}
