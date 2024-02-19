import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { StartComponent } from "./start/start.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [AboutComponent, StartComponent]
})
export class HomeComponent {

}
