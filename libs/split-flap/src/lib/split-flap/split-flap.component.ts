import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PushPipe } from '@ngrx/component';
import { BehaviorSubject, concatMap, delay, from, map, of, pairwise, startWith, switchMap } from 'rxjs';

import { SplitFlapCharDisplayPipe } from './char-display.pipe';
import { CHAR_IDX_MAP, DEFAULT_IDX } from './char-map';
import { range } from './range.fn';

@Component({
  selector: 'sf-board',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PushPipe, SplitFlapCharDisplayPipe],
  styleUrls: ['./split-flap.component.scss'],
  template: `
    <div class="tile border">
      <span class="text-5xl"> {{ displayidx$ | ngrxPush | sfCharDisplay | uppercase }} </span>
    </div>
  `,
})
export class SplitFlapComponent {
  @Input() set char(char: string) {
    const i = CHAR_IDX_MAP.get(char.toLocaleLowerCase()) ?? -1;
    this.charidx.next(i);
  }

  private readonly charidx = new BehaviorSubject<number>(DEFAULT_IDX);
  private readonly charidx$ = this.charidx.asObservable().pipe(startWith(DEFAULT_IDX));

  private readonly changeidx$ = this.charidx$.pipe(pairwise());
  private readonly transform_range$ = this.changeidx$.pipe(map(([start, stop]) => range(start, stop)));

  readonly displayidx$ = this.transform_range$.pipe(
    switchMap((range) => from(range).pipe(concatMap((v) => of(v).pipe(delay(100))))),
    startWith(DEFAULT_IDX),
  );
}
