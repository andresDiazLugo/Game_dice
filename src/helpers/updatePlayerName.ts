import { IPlayer } from "../interfaces/IPlayer";
import { Player } from "../models/Player";

export class UpdatePlayerName {
    
    private id: string;
    private firstName: string;
    private lastName: string

    constructor(id: string, firstName: string, lasName: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lasName;
    }
    async updateName(){
        const update = {
            fitstName: this.firstName,
            lastName: this.lastName
        }
        const player:IPlayer = await Player.findOneAndUpdate({_id:this.id},update) as IPlayer
        return player;
    }
}