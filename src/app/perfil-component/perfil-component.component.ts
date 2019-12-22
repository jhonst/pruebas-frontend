import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-perfil-component',
  templateUrl: './perfil-component.component.html',
  styleUrls: ['./perfil-component.component.sass']
})
export class PerfilComponentComponent implements OnInit {

  perfil: any[] = [];
  protected id: number;
  
  public bgColor = "#6EE559";
  public color = "white";
  public isCircular = true;
  public inicial = "cc";

  constructor( private route: ActivatedRoute, protected usuariosService: UsuariosService ) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.id = params.id );

    this.usuariosService.getPerfil(this.id).subscribe(
      (data) => {
        this.perfil = data['result'];
        console.log(this.perfil);
        this.inicial = this.perfil['first_name'].substr(0,2);
        console.log(this.inicial);
      },
      (error) => {
        console.error(error);
      }
    )


  }

}
