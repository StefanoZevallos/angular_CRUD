import { RegistroService } from 'src/app/services/registro.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-usuarios',
  templateUrl: './modal-usuarios.component.html',
  styleUrls: ['./modal-usuarios.component.css']
})
export class ModalUsuariosComponent {

  constructor(private service: RegistroService) {}

  persona = {} as any;
  datosUsuario: any[] = [];
  datosUsuarioFiltroNombre = []

  mostrarModalEditarUsuario = false
  mostrarModalEliminarUsuario = false
  mostrarlModalAgregarUsuario = false

  idSeleccionado: any = ""
  indiceSeleccionado: any = ""

  nombre = ""
  correo = ""
  telefono = ""

  abrirModalEditarUsuario(id: any, indice: any, nombre: string, correo: string, telefono: string) {
    this.mostrarModalEditarUsuario = true;
    this.idSeleccionado = id
    this.indiceSeleccionado = indice
    this.nombre = nombre
    this.correo = correo
    this.telefono = telefono
    this.persona = { "nombre": nombre, "correo": correo, "telefono": telefono }
  }

  editarUsuarioGuardarCambiosConfirmar() {
    this.service.editarUsuario(`http://localhost:3000/usuario/${this.idSeleccionado}`, this.persona).subscribe(res => {
      console.log(res)
      this.datosUsuario[this.indiceSeleccionado].nombre = res.content.nombre
      this.datosUsuario[this.indiceSeleccionado].correo = res.content.correo
      this.datosUsuario[this.indiceSeleccionado].telefono = res.content.telefono
      localStorage.setItem('datos', JSON.stringify(this.datosUsuario));
    });
    this.mostrarModalEditarUsuario = false;
    this.persona = {}
    alert("Usuario Editado exitosamente")
  }

  cerrarModalEditarUsuario() {
    this.mostrarModalEditarUsuario = false
    this.persona = {}
  }
}
