import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'lra-week-selector',
  imports: [MatTabsModule],
  templateUrl: './week-selector.component.html',
  styleUrl: './week-selector.component.scss',
})
export class WeekSelectorComponent {
  @Input()
  weekList!: Array<string>;
}
