import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  
  get historial(){
    return this.gifsServices.historal;
  }

  buscar( termino:string){

    this.gifsServices.buscarGifs(termino);
    
  }
  
  constructor(private gifsServices:GifsService ){
     
  }
  

}
