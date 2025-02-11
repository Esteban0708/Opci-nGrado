import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/services/menu.service';

@Component({
  selector: 'app-inscripcion-grupo',
  templateUrl: './inscripcion-grupo.component.html',
  styleUrls: ['./inscripcion-grupo.component.css']
})
export class InscripcionGrupoComponent implements OnInit{
 isSidebarReduced: boolean = false;
 isModalOpen: boolean = false;

  constructor(private menuService: MenuService) {}
  
  ngOnInit() {
    this.menuService.isSidebarReduced$.subscribe((isReduced) => {
      this.isSidebarReduced = isReduced;
    });
  }
  Salir() {
    window.location.href = '/principal';
  }
}