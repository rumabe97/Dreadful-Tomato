import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {MainComponent} from '../../shared/components/main/main.component';
import {FooterComponent} from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
