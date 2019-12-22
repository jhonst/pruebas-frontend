import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-lista-component',
  templateUrl: './lista-component.component.html',
  styleUrls: ['./lista-component.component.sass']
})
export class ListaComponentComponent implements OnInit {

  usuarios: any[] = [];
  displayedColumns: string[] = ['iconos', 'id', 'last_name', 'website', 'dob', 'email', 'address', 'phone'];

  public bgColor = "#0375be";
  public color = "white";
  public isCircular = true;
  
  
  constructor( protected usuariosService: UsuariosService) { }

  ngOnInit() {
    
    this.usuariosService.getUsers().subscribe(
      (data) => {
        this.usuarios = data['result'];
        console.log(this.usuarios);
        //console.log(this.usuarios[1].first_name);
      },
      (error) => {
        console.error(error);
      }
    )



  }

  
 
  

}
