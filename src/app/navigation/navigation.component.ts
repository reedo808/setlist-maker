import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  brandLogo: string;

  constructor( private titleService: Title ) { }

  ngOnInit(): void {
    this.brandLogo = "https://coochsassets.blob.core.windows.net/images/NavLogoCoochs.svg";
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
