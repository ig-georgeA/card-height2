import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxDividerDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-manual-height-cards',
  imports: [IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxIconComponent, IgxDividerDirective],
  templateUrl: './manual-height-cards.component.html',
  styleUrls: ['./manual-height-cards.component.scss']
})
export class ManualHeightCardsComponent {}
