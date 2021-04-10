import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../../core/providers/users.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {UserDetailDialogComponent} from "../../components/user-detail-dialog/user-detail-dialog.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {UserDetailBottonsheetComponent} from "../../components/user-detail-bottonsheet/user-detail-bottonsheet.component";
import {ThemeService} from "../../../theme/theme.service";

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent implements OnInit {
  private userDetailDialog: MatDialogRef<UserDetailDialogComponent, any>;
  public users: any[] = [];

  constructor(public userService: UsersService, public dialog: MatDialog, private bottomSheet: MatBottomSheet, private themeService: ThemeService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  goToDetails(user) {
    const w = window.innerWidth;
    if (w < 992) {
      const button = this.bottomSheet.open(UserDetailBottonsheetComponent, {
        data: {
          user,
          selectedTheme: this.themeService.getActiveTheme()
        }
      });
    } else {
      let minWidth = '301px';
      let maxWidth = '587px';
      let minHeight = '380px';
      this.userDetailDialog = this.dialog.open(UserDetailDialogComponent, {
        width: '95vw',
        minWidth,
        maxWidth,
        minHeight,
        autoFocus: false,
        data: {
          user,
          selectedTheme: this.themeService.getActiveTheme()
        },
      });
    }

  }

}
