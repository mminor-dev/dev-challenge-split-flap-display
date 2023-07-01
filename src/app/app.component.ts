import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppDemoComponent } from './demo.component';

@Component({
  standalone: true,
  imports: [RouterModule, AppDemoComponent],
  selector: 'split-flap-display-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'split-flap-display';
}
