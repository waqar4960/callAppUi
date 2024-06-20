import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  searchTerm: string = '';
  selectedSegment: string = 'messages';

  calls = [
    {
      id: 1,
      name: 'Alfredo Calzoni',
      time: '57 mins Ago',
      type: 'audio',
      direction: 'outgoing',
      avatar: 'path/to/avatar1.jpg',
    },
    {
      id: 2,
      name: 'Clara Hazel',
      time: '57 mins Ago',
      type: 'video',
      direction: 'incoming',
      avatar: 'path/to/avatar2.jpg',
    },
    // more call data
  ];

  messages = [
    {
      name: 'Alfredo Calzoni',
      message: 'What about that new jacket if I ...',
      time: '09:18',
      avatar: 'assets/avatars/alfredo.jpg',
      unread: true,
    },
    {
      name: 'Clara Hazel',
      message: 'I know right 😊',
      time: '12:44',
      avatar: 'assets/avatars/clara.jpg',
      unread: true,
    },
    {
      name: 'Brandon Aminoff',
      message: "I've already registered, can't wai...",
      time: '08:06',
      avatar: 'assets/avatars/brandon.jpg',
      unread: true,
    },
    {
      name: 'Amina Mina',
      message: 'It will have two lines of heading ...',
      time: '09:32',
      avatar: 'assets/avatars/amina.jpg',
      unread: false,
    },
    {
      name: 'Savanna Hall',
      message: 'How do you do?',
      time: '10:23',
      avatar: 'assets/avatars/savanna.jpg',
      unread: false,
    },
  ];
  // for search bar
  filteredChats = [...this.messages];
  filteredCalls = [...this.calls];

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
    this.filterList();
  }
  filterList() {
    const searchTermLower = this.searchTerm.toLowerCase();
    if (this.selectedSegment === 'messages') {
      this.filteredChats = this.messages.filter((chat) =>
        chat.name.toLowerCase().includes(searchTermLower)
      );
    } else if (this.selectedSegment === 'calls') {
      this.filteredCalls = this.calls.filter((call) =>
        call.name.toLowerCase().includes(searchTermLower)
      );
    }
  }
  constructor() {}
  ngOnInit(): void {}
}
