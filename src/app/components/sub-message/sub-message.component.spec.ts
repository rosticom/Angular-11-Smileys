import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMessageComponent } from './sub-message.component';

describe('SubMessageComponent', () => {
  let component: SubMessageComponent;
  let fixture: ComponentFixture<SubMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
