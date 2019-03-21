import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsService.getAccounts().subscribe((accounts) => {
      console.log("cuentas: ", accounts);
    });
  }

}
