import { IPlayer } from "./IPlayer";
import { Model } from "mongoose";  

export interface IPlayerModel extends Model<IPlayer>{
    encryptPassword(password: string): string;
    comparePassword(password: string, recivedPassword:string): boolean;
}