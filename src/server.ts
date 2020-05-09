import express, { Application } from 'express';

interface Callback {
    (message: string): void;
}


export default class Server {

    public app : Application ;

    constructor(private port: number){
        this.app = express();
    }

    /*
    start(callback : VoidFunction){
        this.app.listen(this.port, callback);
    }*/

    start(callback : Callback ){
        this.app.listen(this.port, callback);
    }

    static init(port:number): Server {
        return new Server(port);
    }

}
