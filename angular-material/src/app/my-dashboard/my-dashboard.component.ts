import { Component } from '@angular/core';
import { ArrayStack } from '../../model/stack'

@Component({
  selector: 'my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];

  inputstrings: string[] = [
    '(({}))[{}{}]',
    '(({}))(([]))',
    '()'
  ];

  stack: ArrayStack<any> = new ArrayStack<any>();

  checkBalanced = (input: string) => {
    for(let i = 0; i < input.length; i++){
      const char = input.charAt(i);
      // console.log(char);
      switch(char) {
        case '(':
        case '[]]': 
        case '{': 
          console.log('push ' + char);
          this.stack.push(char);
          break;
        case ')':
        case ']':
        case '}':
          console.log('pop ' + char);
          this.stack.pop();
          break;
      }      
    }
    console.log('${text} = ' + (this.stack.isEmpty() ? 'Balanced' : 'Niet OK'), input);
  }


  public check(){
    this.inputstrings.forEach(element => {
      try { 
        this.checkBalanced(element);
      }
      catch(error){
        console.log(error.message);
      }
    });
  }


}
