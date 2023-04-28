import { rollDices } from "./dices";
import { Player } from "../models//Player";
import { IPlayer } from "../interfaces/IPlayer";

export class RollGame {
    private id: string;

    constructor( id: string){
        this.id = id;
    }

    async PlayerRollDice(){
        const game = rollDices();

        const player = await Player.findById({
            _id: this.id
        }) as IPlayer
        player.totalGames++;

        if(game.veredict === 'win'){
            player.gamesWon ++;
        }

        player.playHistory.push(game);
        player.wonRate = parseFloat(((player.gamesWon / player.totalGames) * 100).toFixed())
        await player.save();
    }

}