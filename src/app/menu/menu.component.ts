import { Component, HostListener, OnInit } from '@angular/core';
import { MenuService } from 'src/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isSidebarVisible: boolean = true;
  isMobile: boolean = false;
  isSidebarReduced: boolean = false; 

  private readonly MOBILE_BREAKPOINT = 768; 

  constructor(private menuService: MenuService) {} 

  ngOnInit() {
    this.updateSidebarVisibility();
    this.menuService.isSidebarReduced$.subscribe((isReduced) => {
      this.isSidebarReduced = isReduced;
    });
  }

  // Escucha el cambio de tamaño de ventana
  @HostListener('window:resize')
  onResize() {
    this.updateSidebarVisibility();
  }


  private updateSidebarVisibility() {
    this.isMobile = window.innerWidth <= this.MOBILE_BREAKPOINT;
    this.isSidebarVisible = !this.isMobile; 
    this.isSidebarReduced = this.isMobile; 
  }

  /**
   * Alterna la visibilidad del menú lateral.
   * @param event (opcional) Evento del clic para detener propagación si es necesario.
   */
  toggleSidebar(event?: Event) {
    this.menuService.toggleSidebar(); 

    if (event) {
      event.stopPropagation();
    }
  
    if (this.isMobile) {
      this.isSidebarVisible = !this.isSidebarVisible;
    } else {
      this.isSidebarVisible = !this.isSidebarVisible;
    }
  }
  isConvocatoriasOpen = false;
  isProyectosOpen = false; 

  toggleAccordion(accordion: string) {
    if (accordion === 'convocatorias') {
      this.isConvocatoriasOpen = !this.isConvocatoriasOpen;
      if (this.isConvocatoriasOpen) {
        this.isProyectosOpen = false;
      }
    } else if (accordion === 'proyectos') {
      this.isProyectosOpen = !this.isProyectosOpen;
      if (this.isProyectosOpen) {
        this.isConvocatoriasOpen = false;
      }
    }
  }

  reloadPage(): void {
    window.location.href = '/principal';
  }
  
}
