import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/interfaces/usuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsers: Usuario[] = []
  loading: boolean = false;

  constructor(private _userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListUsuarios();
  }

  getListUsuarios() {
    this.loading = true;

    this._userService.getListUsuarios().subscribe((data: Usuario[]) => {
      this.listUsers = data;
      this.loading = false;
    })
  }

  deleteUsuarios(id: number) {
    this.loading = true;
    this._userService.deleteUsuarios(id).subscribe(() => {
      this.getListUsuarios();
      this.toastr.warning('El Usuario fue eliminado con exito', 'Usuario eliminado');
    })
  }
}
