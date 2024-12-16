import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  // como necesitamos que las rutas esten disponibles en la
  // creacion del sidemenu las importamos, usamos map para obtener todos los
  // valores del children del array routes, si no aparece nada
  // se devuelve un array vacio, se usa la funcion flat para obtener
  // solo el array y quitar los otros elementos del objeto. Despues se realizan
  // dos filtrados el primero solo permite pasar aquellos elementos que
  // tengan el route y un path(o sea se elimina el path: ''). El segundo filtro
  // se usa para eliminar el path: user/:id
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));

  constructor() {}
}
