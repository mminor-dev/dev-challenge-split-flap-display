import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SplitFlapComponent } from 'mm-dc/split-flap';

@Component({
  selector: 'app-demo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    SplitFlapComponent,
  ],
  template: `
    <div class="2xl:container pt-5 px-1 2xl:px-0 2xl:mx-auto ">
      <mat-form-field class="w-full">
        <mat-label>Dispaly</mat-label>
        <input matInput [(ngModel)]="vm" />
      </mat-form-field>

      <div class="mb-5">
        <button mat-button>Basic</button>
        <button mat-button color="primary">Primary</button>
        <button mat-button color="accent">Accent</button>
        <button mat-button color="warn">Warn</button>
      </div>

      <div class="mb-5">
        <button mat-flat-button>Basic</button>
        <button mat-flat-button color="primary">Primary</button>
        <button mat-flat-button color="accent">Accent</button>
        <button mat-flat-button color="warn">Warn</button>
      </div>

      <ul class="list-none flex flex-row flex-wrap gap-3 px-5">
        <ng-container *ngFor="let ch of displayChars; trackBy: trackByI">
          <li>
            <label>{{ ch }}: </label>
            <sf-board></sf-board>
          </li>
        </ng-container>
      </ul>
    </div>
  `,
})
export class AppDemoComponent {
  protected vm: string = '';

  get displayChars() {
    return this.vm.split('');
  }

  trackByI(i: number) {
    return i;
  }
}
