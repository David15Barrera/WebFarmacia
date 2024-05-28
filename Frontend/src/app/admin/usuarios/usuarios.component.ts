import { Component } from '@angular/core';
interface User {

  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
    // Más usuarios
  ];
  
  filteredUsers: User[] = this.users;
  isModalOpen = false;
  selectedUser: User = { id: 0, name: '', email: '' };

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
  }

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(searchTerm) || user.email.toLowerCase().includes(searchTerm)
    );
  }
}
