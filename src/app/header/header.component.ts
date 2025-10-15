import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  template: `

  <div class="header">
  
        

          <h1 class="header-title">Mian Shah | Software Engineer</h1>
           
    </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
