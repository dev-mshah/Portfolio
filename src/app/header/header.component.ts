import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, RouterLink],
  template: `

  <div class="header">
  
        

          <h1 class="header-title">Mian Shah | Software Engineer</h1>
           
    </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
