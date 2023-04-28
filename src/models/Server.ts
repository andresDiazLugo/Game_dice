import express, { Application } from 'express';
import config from '../config';
import routerGames from '../routes/diceGame.routes';
import routerError from '../routes/error404.routes';
import routerAuth from '../routes/auth.routes';
import routerPlayer from '../routes/players.routes';
import { connectDB } from '../db/config'
import cors from 'cors';

class Server{
    private app: Application;
    private port: string;
    private path = {
        error: '*',
        games: '/games',
        auth: '/auth',
        players: '/players'
    };
    constructor(){
        this.app = express();
        this.port = config.port as string;
        this.midllewares();
        this.routes();
        this.dbConnect();
        this.listen();
    };
    async dbConnect(){
     await connectDB(); 
    };

    routes(){
        this.app.use(this.path.games,routerGames);
        this.app.use(this.path.auth,routerAuth);
        this.app.use(this.path.players,routerPlayer);
        this.app.use(this.path.error,routerError);

    };
    midllewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Listenner on port ${this.port}`);
        })
    };

};
export default Server;