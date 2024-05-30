import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { InicioAdminComponent } from './admin/inicio-admin/inicio-admin.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { AddProductosComponent } from './admin/add-productos/add-productos.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { ClientesComponent } from './admin/clientes/clientes.component';
import { VentasComponent } from './admin/ventas/ventas.component';
import { FacturasComponent } from './admin/facturas/facturas.component';
import { ReportesComponent } from './admin/reportes/reportes.component';
import { TiendasComponent } from './admin/tiendas/tiendas.component';
import { InicioUsuarioComponent } from './user/inicio-usuario/inicio-usuario.component';
import { ProductosAddComponent } from './user/productos-add/productos-add.component';
import { ProductosVerComponent } from './productos-ver/productos-ver.component';
import { InicioepiComponent } from './inicioepi/inicioepi.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    InicioAdminComponent,
    ProductosComponent,
    AddProductosComponent,
    UsuariosComponent,
    ClientesComponent,
    VentasComponent,
    FacturasComponent,
    ReportesComponent,
    TiendasComponent,
    InicioUsuarioComponent,
    ProductosAddComponent,
    ProductosVerComponent,
    InicioepiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
