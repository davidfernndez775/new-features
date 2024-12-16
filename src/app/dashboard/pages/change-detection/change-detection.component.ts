import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `<app-title title="Change Detection" />`,
})
export class ChangeDetectionComponent {}
