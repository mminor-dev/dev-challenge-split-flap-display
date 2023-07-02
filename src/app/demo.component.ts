import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
    MatSlideToggleModule,
    SplitFlapComponent,
  ],
  template: `
    <div class="2xl:container pt-5 px-1 2xl:px-0 2xl:mx-auto ">
      <div class="flex items-center gap-x-10 px-5 sticky top-0 mat-app-background">
        <div class="grow">
          <mat-form-field class="w-full">
            <mat-label>Dispaly</mat-label>
            <input matInput [maxlength]="dynamic ? null : static_pad" [(ngModel)]="vm" />
          </mat-form-field>
        </div>

        <div class="">
          <mat-slide-toggle [(ngModel)]="dynamic" (ngModelChange)="toggleDynamic()">
            Dynamic Length
          </mat-slide-toggle>
        </div>
      </div>

      <ul class="list-none flex flex-row flex-wrap gap-3 px-5">
        <ng-container *ngFor="let ch of displayChars; trackBy: trackByI">
          <li>
            <sf-board [char]="ch | uppercase"></sf-board>
          </li>
        </ng-container>
      </ul>
    </div>
  `,
})
export class AppDemoComponent {
  protected vm = '';
  protected dynamic = true;

  protected readonly static_pad = 20;
  private dynamicPad = this.static_pad;

  get displayChars() {
    if (this.dynamic) {
      if (this.vm.length > this.dynamicPad) {
        this.dynamicPad = this.vm.length;
      }
    } else {
      this.dynamicPad = this.static_pad;
    }

    return this.vm.padEnd(this.dynamicPad, ' ').split('');
  }

  trackByI(i: number) {
    return i;
  }

  toggleDynamic() {
    if (!this.dynamic) {
      this.vm = this.vm.substring(0, this.static_pad);
    }
  }
}
