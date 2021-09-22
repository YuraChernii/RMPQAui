import { Component } from '@angular/core';
import { HttpClient, HttpXhrBackend} from '@angular/common/http';
import { User } from '../app/Models/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RMPQAui';
  user: User | undefined;
httpClient2 = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
    constructor(){}
      
    ngOnInit(){
          
        this.httpClient2.get('https://localhost:5001/Product').subscribe((data:any) => data.data);
    }
}
