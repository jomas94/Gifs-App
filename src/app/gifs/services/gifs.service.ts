import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private   apiKey:string = 'HiY71iexggnPp3WDfxbyLEXWRRXVIumA'; 
  private _historial:string[] = [];

  public resultados:Gif[] = [];
  
  get historal(){
    return [...this._historial];
  }
  
  constructor( private http:HttpClient){}

  buscarGifs( query:string=''){
    
    query = query.trim().toLowerCase();
    
    if(!this._historial.includes(query)){

      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10)
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=HiY71iexggnPp3WDfxbyLEXWRRXVIumA&limit=10&q=${query}`)
      .subscribe((resp)=>{
        
      console.log(resp.data)
      this.resultados = resp.data;
      console.log(resp.pagination.count);
      
    });
    

  
  }
}
