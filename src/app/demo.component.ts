import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SplitFlapComponent } from 'mm-dc/split-flap';

@Component({
  selector: 'app-demo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, SplitFlapComponent],
  template: `
    <div>
      <input type="text" [(ngModel)]="vm" />
    </div>

    <ul>
      <ng-container *ngFor="let ch of displayChars">
        <li>
          <label>{{ ch }}: </label>
          <sf-board></sf-board>
        </li>
      </ng-container>
    </ul>
  `,
})
export class AppDemoComponent {
  protected vm: string = '';

  get displayChars() {
    return this.vm.split('');

    // const l = this.vm.length;
    // return Array(l);
  }
}
