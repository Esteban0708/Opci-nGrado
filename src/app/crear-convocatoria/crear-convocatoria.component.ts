import { Component, OnInit, ElementRef  } from '@angular/core';
import { MenuService } from 'src/services/menu.service';

@Component({
  selector: 'app-crear-convocatoria',
  templateUrl: './crear-convocatoria.component.html',
  styleUrls: ['./crear-convocatoria.component.css']
})
export class CrearConvocatoriaComponent implements OnInit{
  isSidebarReduced: boolean = false;
  isModalOpen: boolean = false;
  isCollapsed = true;

  constructor(private menuService: MenuService) {}
  
  ngOnInit() {
    this.menuService.isSidebarReduced$.subscribe((isReduced) => {
      this.isSidebarReduced = isReduced;
    });
  }
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  Salir(){
    window.location.href = '/principal';
  }
}
