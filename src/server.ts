import express, { Application } from 'express';
import { inherits } from 'util';


export default class Server {
    
    public app : Application ;

    constructor(private port: number){
        this.app = express();
    }

    start(callback : VoidFunction){
        this.app.listen(this.port, callback);
    }

    static init(port:number): Server {
        return new Server(port);
    }

}
