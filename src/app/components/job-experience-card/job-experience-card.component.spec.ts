import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExperienceCardComponent } from './job-experience-card.component';

describe('JobExperienceCardComponent', () => {
  let component: JobExperienceCardComponent;
  let fixture: ComponentFixture<JobExperienceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobExperienceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobExperienceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
