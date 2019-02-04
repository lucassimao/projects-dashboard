import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = 'projects';

  all(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.getUrl());
  }

  update(project) {
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }

  delete(project) {
    return this.httpClient.delete(this.getUrlForId(project.id), project);
  }
  getUrlForId(id: any): string {
    return `${this.getUrl()}/${id}`;
  }

  create(project) {
    return this.httpClient.post(this.getUrl(), project);
  }
  getUrl(): string {
    return `${BASE_URL}/${this.model}`;
  }

  constructor(private httpClient: HttpClient) {}
}
