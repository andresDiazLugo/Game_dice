import { Player } from "../models/Player";
import { sign } from "jsonwebtoken"
import config from "../config";
export class Auth {
    private firstName: string | undefined;
    private lastName: string | undefined;
    private email: string;
    private date: Date | undefined;
    private password: string;
    constructor(email:string, passord: string, firstName?:string, lastName?:string,
        date?:Date){
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.date = date;
            this.password = passord;
    }
    async register(){
        const player = await new Player({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            date: this.date,
            password: await Player.encryptPassword(this.password)
        });
        await player.save();
        const jwt = sign({ id: player.id }, config.jwtSecret as string, {
            expiresIn: '4h'
        });
        return jwt
    }

    async login(){
        const playerDB = await Player.findOne()
        if (!playerDB) {
            return 'Wrong email!!'
        } 
        const validPassword = await Player.comparePassword(this.password, playerDB.password);
        if(!validPassword){
            return 'Wrong password'
        }
        const jwt = sign({id: playerDB.id},config.jwtSecret as string,{
            expiresIn: "4h"
        });

        return jwt
    }
}