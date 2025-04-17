import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGitComponent } from './profile-git.component';

describe('ProfileGitComponent', () => {
  let component: ProfileGitComponent;
  let fixture: ComponentFixture<ProfileGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileGitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
