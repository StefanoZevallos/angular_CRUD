import { Component, OnInit } from '@angular/core';
import { RegistroService } from './services/registro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular_app_formulario';

  constructor(private service: RegistroService) { }
  
  
  url = "http://localhost:3000/registro";
  persona = {} as any;
  datos: any[] = [];
  mostrarModal = false
  idSeleccionado:any = ""
  indiceSeleccionado:any = ""
  mostrarModalEliminarUsuario = false


  ngOnInit() {
    const storedData = localStorage.getItem('datos');
    this.datos = storedData ? JSON.parse(storedData) : [];
  }
  
  abrirModal(id:any,indice:any) {
    this.mostrarModal = true;
    this.idSeleccionado = id
    this.indiceSeleccionado = indice
  }

  editarUsuario() {
    this.service.editarPersona(`http://localhost:3000/usuario/${this.idSeleccionado}`, this.persona).subscribe(res => {
     console.log(res)
      this.datos[this.indiceSeleccionado].nombre = res.content.nombre
      this.datos[this.indiceSeleccionado].correo = res.content.correo
      this.datos[this.indiceSeleccionado].telefono = res.content.telefono
      localStorage.setItem('datos', JSON.stringify(this.datos));
      this.persona= {}
    });      
      this.mostrarModal=false;
      alert("Usuario Editado exitosamente")
  }


  agregarCampo() {
    this.service.enviarPersona(`http://localhost:3000/registro`, this.persona).subscribe(res => {
        console.log(res);
        if (res.content) {
          this.datos.push(res.content);
          localStorage.setItem('datos', JSON.stringify(this.datos));
        } else {
          console.error('La respuesta del servidor no es válida:', res.content);
        }
      },
      (error: any) => {
        this.persona= {}
        alert('Error al crear al usuario, los correos deben ser únicos');
      }
    );
  }

  cerrarModal() {
    this.mostrarModal=false
  }

  cerrarModalEliminarUsuario() {
    this.mostrarModalEliminarUsuario=false
  }

  abrirModalEliminarUsuario(id:any,indice:any) {
    this.mostrarModalEliminarUsuario = true
    this.idSeleccionado = id
    this.indiceSeleccionado = indice
  }

  borrarUsuario(){
    this.service.eliminarPersona(`http://localhost:3000/usuario/${this.idSeleccionado}`).subscribe(res => {
      console.log(res)}) 
      this.datos.splice(this.indiceSeleccionado, 1);
      localStorage.setItem('datos', JSON.stringify(this.datos));
      this.mostrarModalEliminarUsuario=false
  }

}

