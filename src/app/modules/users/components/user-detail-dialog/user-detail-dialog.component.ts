import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {ThemeService} from "../../../theme/theme.service";

@Component({
  selector: 'app-user-detail-dialog',
  templateUrl: './user-detail-dialog.component.html',
  styleUrls: ['./user-detail-dialog.component.scss'],
})
export class UserDetailDialogComponent implements OnInit {
  public user;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    private themeService: ThemeService,
    public dialogRef: MatDialogRef<UserDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    if (!!this.data && !!this.data.user) {
      this.themeService.setTheme(this.data.selectedTheme.name);
      this.user = this.data.user;
    }
  }
}
