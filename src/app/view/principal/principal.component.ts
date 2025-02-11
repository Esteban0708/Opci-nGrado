import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuService } from 'src/app/service/services/menu.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  isSidebarReduced: boolean = false;
  isModalOpen: boolean = false;
  elements: any[] = [];
  showImageOptions: boolean = false;
  carouselImages: string[] = [];
  isSelectingForCarousel: boolean = false;

  @ViewChild('carouselFileInput') carouselFileInput!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.isSidebarReduced$.subscribe((isReduced) => {
      this.isSidebarReduced = isReduced;
    });
  }

  addElement() {
    this.elements.push({ type: 'input', content: '' });
  }

  toggleImageOptions() {
    this.showImageOptions = !this.showImageOptions;
  }

  removeElement(index: number) {
    this.elements.splice(index, 1);
  }

  removeCarouselImage(carouselIndex: number, imageIndex: number) {
    this.elements[carouselIndex].images.splice(imageIndex, 1);
    
    if (this.elements[carouselIndex].images.length === 0) {
      this.removeElement(carouselIndex);
    }
  }


  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  triggerCarouselFileInput() {
    this.carouselFileInput.nativeElement.click();
  }

  handleFileInput(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.elements.push({ type: 'image', content: e.target.result });
        };
        reader.readAsDataURL(file);
      }
    }
  }

  
  handleCarouselFileInput(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      const images: string[] = [];
      let loadedImages = 0;

      for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          images.push(e.target.result);
          loadedImages++;

          // Cuando todas las imágenes estén cargadas, añadir el carrusel
          if (loadedImages === files.length) {
            this.elements.push({ 
              type: 'carousel', 
              images: images 
            });
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }

  addCarousel() {
    this.triggerCarouselFileInput();
  }

  openModifyModal() {
    this.isModalOpen = true;
  }

  closeModifyModal() {
    this.isModalOpen = false;
  }
}