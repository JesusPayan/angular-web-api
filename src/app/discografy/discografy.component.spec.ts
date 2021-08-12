import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscografyComponent } from './discografy.component';

describe('DiscografyComponent', () => {
  let component: DiscografyComponent;
  let fixture: ComponentFixture<DiscografyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscografyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscografyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
