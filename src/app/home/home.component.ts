import { Component } from '@angular/core';
import { CvComponent } from "./cv/cv.component";
import { AboutComponent } from "../about/about.component";
import { StartComponent } from "./start/start.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CvComponent, AboutComponent, StartComponent]
})
export class HomeComponent {

}
