import { resources, SpriteFrame } from 'cc';
import { Singleton } from "db://assets/base/base";

export default class ResourceManage extends Singleton {

    static get Instance(){
        return super.getInstance<ResourceManage>();
    }

    loadRes(path: string, type : typeof SpriteFrame = SpriteFrame){
        return new Promise<SpriteFrame[]>((resolve, reject)=>{
            resources.loadDir(path, type, function (err, assets) {
               if(err) {
                    reject(err);
                    return;
                }
               resolve(assets);
            });
        })
    }
}
