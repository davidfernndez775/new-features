import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal([
    'Angular',
    'Django',
    'NextJS',
    'Laravel',
    'Vue',
    'Spring',
  ]);
  public frameworks2 = signal([]);

  public toggleContent() {
    return this.showContent.update((value) => !value);
  }
}
