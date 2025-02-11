import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/services/menu.service';

@Component({
  selector: 'app-ver-convocatorias',
  templateUrl: './ver-convocatorias.component.html',
  styleUrls: ['./ver-convocatorias.component.css']
})
export class VerConvocatoriasComponent implements OnInit{
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
