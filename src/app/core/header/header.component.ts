import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  collapse_toggle = false;
  constructor(
    public dataStorageService: DataStorageService,
    public authService: AuthService) {}

  ngOnInit() {
  }

  onCollapse() {

  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe((response) => {
      });
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}
