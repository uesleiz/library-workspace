import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZchartsComponent } from './zcharts.component';

describe('ZchartsComponent', () => {
  let component: ZchartsComponent;
  let fixture: ComponentFixture<ZchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZchartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
