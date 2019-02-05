import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { DebugElement } from '@angular/core';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Project, ProjectsService } from '@workshop/core-data';
import { By } from '@angular/platform-browser';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let debugElement: DebugElement;
  const emptyProject :Project = {id:null,title:'',details:'',percentComplete:0,approved:false};
  let projectsService : ProjectsService;
  const mockProjectsService = {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsComponent,ProjectsListComponent,ProjectsDetailsComponent ],
      imports:[ MaterialModule,FormsModule,HttpClientModule,BrowserAnimationsModule],
      providers:[{provide: ProjectsService,userValue: mockProjectsService}]
    })
    // .createComponent(ProjectsComponent);
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
    projectsService = debugElement.injector.get(ProjectsService);
  });

  it('should have the primary color === "red"',()=>{
      expect(component.primaryColor).toBe('red');
  });

  it('should select a project',()=>{
      component.selectProject(emptyProject);
      expect(component.selectedProject).toBe(emptyProject);
  })

  it('should display primaryColor',()=>{
    const h1 = debugElement.query(By.css("h1"));
    expect(h1.nativeElement.innerText).toBe("red");
  })

  it('should update h1 to new primaryColor',()=>{
    const h1 = debugElement.query(By.css("h1"));
    component.primaryColor = 'black';
    fixture.detectChanges();
    expect(h1.nativeElement.innerText).toBe("black");
  })
});
