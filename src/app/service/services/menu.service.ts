import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  private isSidebarReducedSubject = new BehaviorSubject<boolean>(false);  
  isSidebarReduced$ = this.isSidebarReducedSubject.asObservable(); 

  constructor() {}

  toggleSidebar() {
    
    this.isSidebarReducedSubject.next(!this.isSidebarReducedSubject.value);
  }
}
