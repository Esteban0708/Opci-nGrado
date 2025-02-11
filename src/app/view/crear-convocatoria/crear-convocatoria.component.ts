import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/services/menu.service';
declare var bootstrap: any;
@Component({
  selector: 'app-crear-convocatoria',
  templateUrl: './crear-convocatoria.component.html',
  styleUrls: ['./crear-convocatoria.component.css']
})
export class CrearConvocatoriaComponent implements OnInit {
  isSidebarReduced: boolean = false;
  isModalOpen: boolean = false;
  isCollapsed = true;
  fechaInicio: string = '';
  fechaFin: string = '';

  constructor(private menuService: MenuService) {
    const hoy = new Date().toISOString().split('T')[0]; 
    this.fechaInicio = hoy;
    this.fechaFin = hoy;
  }
  
  ngOnInit() {
    this.menuService.isSidebarReduced$.subscribe((isReduced) => {
      this.isSidebarReduced = isReduced;
    });
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  openModal() {
    const modalElement = document.getElementById('modalCrearLinea');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement, {
        keyboard: false 
      });
      modal.show();
    }
  }
  openModalObject(){
    const modalElement = document.getElementById('CrearObjetivos');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement, {
        keyboard: false 
      });
      modal.show();
    }
  }
  
  selectedOption: string = "";
  selectedOptions: string[] = [];

  updateBox() {
    if (this.selectedOption && !this.selectedOptions.includes(this.selectedOption)) {
      this.selectedOptions.push(this.selectedOption);
    }
    this.selectedOption = ""; 
  }

  removeOption(index: number) {
    this.selectedOptions.splice(index, 1);
  }

  Salir() {
    window.location.href = '/principal';
  }
}
