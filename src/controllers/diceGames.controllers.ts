import { Request,Response } from "express"
import { RollGame } from "../helpers/diceGames"
export const playersRollDice = async(req: Request, res: Response)=>{
    try {
        const id = req.params.id;
        const game = await new RollGame(id);
        const playerRollDices = await game.PlayerRollDice();

        res.status(201).json({
            playerRollDices
        })

    } catch (error) {
        res.status(400).json({
            msg: 'the Id enteres isn`t valid'
        })
    }
};

export const generalRanking = (req: Request, res: Response)=>{
    try {
        
    } catch (error) {
        
    }
};


export const getBetPlayer = (req: Request, res: Response)=>{
    try {
        
    } catch (error) {
        
    }
};

export const getWorstPlayer = (req: Request, res: Response)=>{
    try {
        
    } catch (error) {
        
    }
};

export const deleteGames = (req: Request, res: Response)=>{
    try {
        
    } catch (error) {
        
    }
};