import { GetWeb3Service } from './utils/get-web3.service';
import { Component, OnInit } from '@angular/core';
import SimpleStorageContract from '../../../build/contracts/SimpleStorage.json';
import contract from 'truffle-contract';

import Web3 from 'web3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  web3: Web3;
  simpleStorage;
  storageValue: number;
  constructor(private _getWeb3Service: GetWeb3Service) { }

  ngOnInit(): void {
    console.log(contract);
    this._getWeb3Service.getWeb3()
      .then(web3 => this.web3 = web3)
      .catch(() => console.error("Error finding web3."));

    this.storageValue = 12;
  }

  instantiateContract() {
    const props = {
      level: 0,
      startValue: 'string',
      added: 'string'
    }
  }
}
