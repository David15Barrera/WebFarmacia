import { Component } from '@angular/core';

interface User {
  id: number;
  nombreUser: string;
  contraUser: string;
  dpiUser: string;
  nitUserDatos: string;
  apellidoUser: string;
  direccionUser: string;
  telefonoUser: string;
  genero: string;
  cargoUser: string;
  email: string;
}


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  users: User[] = [
    { id: 1, nombreUser: 'John', contraUser: 'pass123', dpiUser: '1234567890123', nitUserDatos: '12345678', apellidoUser: 'Doe', direccionUser: '123 Main St', telefonoUser: '12345678', genero: 'Masculino', cargoUser: 'Admin', email: 'johndoe@example.com' },
    { id: 2, nombreUser: 'Jane', contraUser: 'pass456', dpiUser: '9876543210987', nitUserDatos: '87654321', apellidoUser: 'Smith', direccionUser: '456 Maple Ave', telefonoUser: '87654321', genero: 'Femenino', cargoUser: 'User', email: 'janesmith@example.com' },
    // Más usuarios
  ];
  
  filteredUsers: User[] = this.users;
  isModalOpen = false;
  selectedUser: User = { id: 0, nombreUser: '', contraUser: '', dpiUser: '', nitUserDatos: '', apellidoUser: '', direccionUser: '', telefonoUser: '', genero: '', cargoUser: '', email: '' };

  openEditModal(user: User): void {
    this.selectedUser = { ...user };
    this.isModalOpen = true;
  }

  closeEditModal(): void {
    this.isModalOpen = false;
  }

  saveChanges(): void {
    const index = this.users.findIndex(user => user.id === this.selectedUser.id);
    if (index !== -1) {
      this.users[index] = { ...this.selectedUser };
    }
    this.closeEditModal();
  }

  deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
    this.filteredUsers = this.users; // Asegura que la lista filtrada se actualice después de eliminar un usuario
  }

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.nombreUser.toLowerCase().includes(searchTerm) ||
      user.apellidoUser.toLowerCase().includes(searchTerm) ||
      user.dpiUser.toLowerCase().includes(searchTerm) ||
      user.nitUserDatos.toLowerCase().includes(searchTerm) ||
      user.direccionUser.toLowerCase().includes(searchTerm) ||
      user.telefonoUser.toLowerCase().includes(searchTerm) ||
      user.genero.toLowerCase().includes(searchTerm) ||
      user.cargoUser.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm)
    );
  }

}
