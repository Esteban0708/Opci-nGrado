import { Component, OnInit  } from '@angular/core';
import { MenuService } from 'src/services/menu.service';

@Component({
  selector: 'app-ver-convocatoria',
  templateUrl: './ver-convocatoria.component.html',
  styleUrls: ['./ver-convocatoria.component.css']
})
export class VerConvocatoriaComponent implements OnInit{
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
