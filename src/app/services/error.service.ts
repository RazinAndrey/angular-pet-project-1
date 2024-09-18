import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ErrorService {

  // инф об ошибке (динамически тригерим с помощью Subject)
  error$ = new Subject<string>();

  // сообщение ошибки
  handle(message: string){
    this.error$.next(message);
  }

  // очищаем сообщение ошибки
  clear(){
    this.error$.next('');
  }
}
