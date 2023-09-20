import { _decorator } from 'cc';

export class Singleton {

    private static _instance: any = null;

   static getInstance<T>(): T{
       if(this._instance === null){
           this._instance = new this();
       }
       return this._instance;
   }
}
