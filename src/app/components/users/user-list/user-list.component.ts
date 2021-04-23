import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {IUser} from "../../../core/IUser";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'action'];
  dataSource!: MatTableDataSource<IUser>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getAll();
    console.log(this.users)
  }

  getAll() {
    this.userService.getAll().subscribe((res) => {
      this.users = res.data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id: number) {
    if (confirm('Are you sure?')) {
      this.userService.delete(id).subscribe((res) => {
        if (res.status == 'success') {
          this.getAll();
        } else {
          alert('Error system! Please contact admin system')
        }
      })
    }

  }


}
