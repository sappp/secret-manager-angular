import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretCardDetailsComponent } from './secret-card-details.component';

describe('SecretCardDetailsComponent', () => {
  let component: SecretCardDetailsComponent;
  let fixture: ComponentFixture<SecretCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
