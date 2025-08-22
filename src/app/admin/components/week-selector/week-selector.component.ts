import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'lra-week-selector',
  imports: [MatTabsModule],
  templateUrl: './week-selector.component.html',
  styleUrl: './week-selector.component.scss',
})
export class WeekSelectorComponent {
  weekList: Array<string> = ['Week 1', 'Week 2', 'Week 3'];
}
