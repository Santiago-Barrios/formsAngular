import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  path: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class SidemenuComponent {
  templateMenu: MenuItem[] = [
    {
      text: 'Básicos',
      path: './template/basics',
    },
    {
      text: 'Dinámicos',
      path: './template/dinamics',
    },
    {
      text: 'Switches',
      path: './template/switches',
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      text: 'Básicos',
      path: './reactive/basics',
    },
    {
      text: 'Dinámicos',
      path: './reactive/dinamics',
    },
    {
      text: 'Switches',
      path: './reactive/switches',
    },
  ];
}
