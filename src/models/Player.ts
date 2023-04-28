import { Schema,model } from "mongoose";
import bcrypt from "bcryptjs";
import { IPlayer } from "../interfaces/IPlayer"; 
import { IPlayerModel } from "../interfaces/IPlayerMethod";

const PlayerSchema = new Schema({
    firstName: {
        type: String,
        required:[true, 'First name is required']
    },
    lastName:{
        type: String,
        required:[true, 'Last name is required']
    },
    email:{
        type: String,
        required:[true, 'Email is required'],
        unique: true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'Email is required']
        // validate: {
        //     validator: function(email:string) {
        //       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        //       return emailRegex.test(email);
        //     },
        //     message: 'Correo electrónico inválido'
        //   } 
    },
    password:{
        type: String,
        required: [true, 'Password is required']
    },
    date:String,
    totalGames:{
        type: Number,
        default: 0
    },
    gameWon:{
        type: Number,
        default: 0
    },
    wonRate:{
        type: Number,
        default: 0
    },
    playerHistory:[Object]
},{
    versionKey: false
});
PlayerSchema.static('encryptPassword', async(password: string)=>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    })
PlayerSchema.static('comparePassword', async(password: string, recivedPassword: string)=>{
    return await bcrypt.compare(password, recivedPassword);
})



export const Player = model<IPlayer, IPlayerModel>('Player',PlayerSchema)