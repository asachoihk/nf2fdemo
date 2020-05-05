import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSignComponent } from './page-sign.component';

describe('PageSignComponent', () => {
  let component: PageSignComponent;
  let fixture: ComponentFixture<PageSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
