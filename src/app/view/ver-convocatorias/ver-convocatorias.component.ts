import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/services/menu.service';

@Component({
  selector: 'app-ver-convocatorias',
  templateUrl: './ver-convocatorias.component.html',
  styleUrls: ['./ver-convocatorias.component.css']
})
export class VerConvocatoriasComponent implements OnInit {
  isSidebarReduced: boolean = false;
  isModalOpen: boolean = false;
  mostrarOpciones: boolean = false;
  filtroSeleccionado: string = 'Activo';
  convocatorias = [
    {
      titulo: 'V CONVOCATORIA DE PROYECTOS DE EXTENSIÓN Y PROYECCIÓN SOCIAL',
      fechaDesde: '09-08-2024',
      fechaHasta: '09-11-2025',
      estado: 'Activa'
    },
    {
      titulo: 'VI CONVOCATORIA DE PROYECTOS DE EXTENSIÓN Y PROYECCIÓN SOCIAL',
      fechaDesde: '09-08-2024',
      fechaHasta: '09-11-2024',
      estado: 'Inactiva'
    },
    {
      titulo: 'VII CONVOCATORIA DE PROYECTOS DE EXTENSIÓN Y PROYECCIÓN SOCIAL',
      fechaDesde: '09-08-2024',
      fechaHasta: '09-11-2024',
      estado: 'Inactiva'
    },
    {
      titulo: 'VIII CONVOCATORIA DE PROYECTOS DE EXTENSIÓN Y PROYECCIÓN SOCIAL',
      fechaDesde: '09-08-2024',
      fechaHasta: '09-11-2024',
      estado: 'Inactiva'
    }
  ];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.isSidebarReduced$.subscribe((isReduced) => {
      this.isSidebarReduced = isReduced;
    });
  }

  Salir() {
    window.location.href = '/principal';
  }

  toggleFiltro() {
    this.mostrarOpciones = !this.mostrarOpciones;
  }

  seleccionarFiltro(filtro: string) {
    this.filtroSeleccionado = filtro;
    this.mostrarOpciones = false;
  }

  get convocatoriasFiltradas() {
    if (this.filtroSeleccionado === 'todos') {
      return this.convocatorias;
    }
    return this.convocatorias.filter(c => c.estado === 'Activa');
  }
}
