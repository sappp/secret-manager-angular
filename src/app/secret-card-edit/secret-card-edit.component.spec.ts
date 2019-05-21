import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretCardEditComponent } from './secret-card-edit.component';

describe('SecretCardEditComponent', () => {
  let component: SecretCardEditComponent;
  let fixture: ComponentFixture<SecretCardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretCardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
