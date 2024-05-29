import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { InicioAdminComponent } from './admin/inicio-admin/inicio-admin.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { AddProductosComponent } from './admin/add-productos/add-productos.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { ClientesComponent } from './admin/clientes/clientes.component';
import { VentasComponent } from './admin/ventas/ventas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
 
  { 
    path: 'admin', component: InicioAdminComponent, children: [
      { path: 'productos', component: ProductosComponent },
      { path: 'addproductos', component: AddProductosComponent},
      { path: 'usuario', component: UsuariosComponent},
      { path: 'clientes', component: ClientesComponent},
      { path: 'ventas', component: VentasComponent}
      // Agrega otras rutas hijas aquí
    ]
  },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
