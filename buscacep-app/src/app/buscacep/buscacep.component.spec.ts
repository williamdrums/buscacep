import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscacepComponent } from './buscacep.component';

describe('BuscacepComponent', () => {
  let component: BuscacepComponent;
  let fixture: ComponentFixture<BuscacepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscacepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscacepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
