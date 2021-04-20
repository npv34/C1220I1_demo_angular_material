import { Injectable } from '@angular/core';
import {IUser} from "../core/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = [
    {
      id: 1,
      name: 'Tuan',
      address: 'Ha noi',
      phone: '0929394211'
    },
    {
      id: 2,
      name: 'Thang',
      address: 'Ha noi',
      phone: '0929394211'
    },
    {
      id: 3,
      name: 'Tuan 2',
      address: 'Ha noi',
      phone: '0929394211'
    },
    {
      id: 4,
      name: 'Tuan 4',
      address: 'Ha noi',
      phone: '0929394211'
    }
  ]
  constructor() { }

  getAll() {
    return this.users;
  }

  findById(id: number) {
    return this.users.filter(user => {
      return user.id === id;
    })
  }
}
