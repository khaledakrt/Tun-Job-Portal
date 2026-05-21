 
import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgIf, NgFor, DatePipe } from '@angular/common';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  // 🚀 FIX : Retrait de DatePipe pour enlever le warning Webpack
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})

export class ManageUsersComponent implements OnInit {
  private adminService = inject(AdminService);
  private cdr = inject(ChangeDetectorRef);

  usersList: any[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.adminService.getAllUsers().subscribe({
      next: (data) => {
        this.usersList = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => this.isLoading = false
    });
  }

   // ... votre code actuel et votre fonction onDeleteUser ...

  onDeleteUser(userId: number): void {
    if (confirm("⚠️ Êtes-vous sûr de vouloir supprimer définitivement cet utilisateur de Tun-Job ?")) {
      this.adminService.deleteUser(userId).subscribe({
        next: () => {
          this.usersList = this.usersList.filter(u => u.id !== userId);
          this.cdr.detectChanges();
        }
      });
    }
  }

  // 👑 COLLEZ LE CODE JUSTE ICI, AVANT LA DERNIÈRE ACCOLADE DE FERMETURE :
  onToggleVerification(user: any): void {
    const nextStatus = user.is_verified_company ? 0 : 1;
    this.adminService.toggleCompanyVerification(user.id, nextStatus).subscribe({
      next: () => {
        user.is_verified_company = nextStatus; // Met à jour l'interface instantanément
        this.cdr.detectChanges();
      }
    });
  }

} // 👈 Cette accolade ferme toute votre classe, laissez-la bien tout en bas

