import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxDividerDirective, IgxAvatarComponent } from 'igniteui-angular';
import { ManualHeightCardsComponent } from './manual-height-cards.component';

describe('ManualHeightCardsComponent', () => {
  let component: ManualHeightCardsComponent;
  let fixture: ComponentFixture<ManualHeightCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualHeightCardsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxDividerDirective, IgxAvatarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualHeightCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
