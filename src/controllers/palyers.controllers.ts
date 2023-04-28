import { Request, Response } from "express";
import { GetPlayer } from "../helpers/getPalyers";
import { UpdatePlayerName } from "../helpers/updatePlayerName";

export const getAllPlayer = async (req:Request,res:Response)=>{
    try {
        const getAllPlayers = await GetPlayer.getAllPlayers();
        res.status(201).json({
            getAllPlayers
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error 500 - inetrnal Server Error'
        })
    }
};

export const getOnePlayer = async(req:Request,res:Response)=>{
    try {
       const id = req.params.id;
       const player =  new GetPlayer(id);
       const getPLayer = await player.getOnePlayer();
       res.status(201).json({
        getPLayer   
    })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error 500 - inetrnal Server Error'
        })
    }
}

export const updateName = (req:Request, res:Response)=>{
    try {
        const id = req.params.id;
        const { firstName, LastName } = req.body;
        const updatePlayerName = new UpdatePlayerName(id, firstName, LastName);

        res.status(201).json({
            msg: 'Player Updated',
            updatePlayerName
        })
    } catch (error) {
        console.error(error);
        res.status(400).json({
            msg: 'Player doesn`t exist'
        });
    }
}

export const deletePlayer = (req:Request,res:Response)=>{
    try {
        const id = req.params.id;
        const player = new GetPlayer(id);
        player.getAndDelete();

        res.status(201).json({
            msg: 'Player deleted',
            player
        })


    } catch (error) {
        console.error(error);
        res.status(400).json({
            msg: 'Player doesn`t exist'
        });
    }
};