import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  activeTab: string = 'Messages';
  constructor() {}
  segmentChanged(e: any) {
    this.activeTab = e.target.value;
  }

  ngOnInit() {}
}
