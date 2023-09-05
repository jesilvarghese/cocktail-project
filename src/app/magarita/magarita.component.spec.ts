import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagaritaComponent } from './magarita.component';

describe('MagaritaComponent', () => {
  let component: MagaritaComponent;
  let fixture: ComponentFixture<MagaritaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MagaritaComponent]
    });
    fixture = TestBed.createComponent(MagaritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
