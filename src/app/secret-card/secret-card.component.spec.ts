import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretCardComponent } from './secret-card.component';

describe('SecretCardComponent', () => {
  let component: SecretCardComponent;
  let fixture: ComponentFixture<SecretCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
