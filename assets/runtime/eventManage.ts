import { Singleton } from "db://assets/base/base";

export interface Iitem {
    func: Function,
    ctx: unknown,
}

export default class EventManage extends Singleton {

    static get Instance(){
        return super.getInstance<EventManage>();
    }

    eventDict:Map<string,Array<Iitem>> = new Map();

    on(eventName: string, func: Function, ctx?: unknown){
        if(this.eventDict.has(eventName)){
            this.eventDict.get(eventName).push({func,ctx});
        }else{
            this.eventDict.set(eventName,[{func,ctx}]);
        }
    }

    off(eventName: string, func: Function){
        if(this.eventDict.has(eventName)){
           const index = this.eventDict.get(eventName).findIndex(i=>i.func!=func);
           index > -1 && this.eventDict.get(eventName).splice(index, 1);
        }
    }

    emit(eventName: string, ...params: unknown[]){
        if(this.eventDict.has(eventName)){
            this.eventDict.get(eventName).forEach(({func, ctx})=>{
                if(ctx) func.apply(ctx, params);
                else func(...params);
            })
        }else{
            console.info(`don't have the ${eventName} event`)
        }
    }

    clear(){
        this.eventDict.clear();
    }
}
