import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheet} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-user-detail-bottomsheet',
  templateUrl: './user-detail-bottonsheet.component.html',
  styleUrls: ['./user-detail-bottonsheet.component.scss'],
})
export class UserDetailBottonsheetComponent implements OnInit {
  public user;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    public bottomSheetRef: MatBottomSheet
  ) {
  }

  ngOnInit() {
    if (!!this.data && !!this.data.user) {
      this.user = this.data.user
    }
  }
}
