import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDetailsComponent } from './projects-details.component';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProjectsDetailsComponent', () => {
  let component: ProjectsDetailsComponent;
  let fixture: ComponentFixture<ProjectsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ ProjectsDetailsComponent ],
        imports:[ MaterialModule,FormsModule,BrowserAnimationsModule]
    })
    .compileComponents();
  }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProjectsDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
});
