import { Router } from "express";
import { playersRollDice,getBetPlayer,getWorstPlayer,deleteGames,generalRanking} from "../controllers/diceGames.controllers"
const router = Router();

router.post("/player/:id",playersRollDice);
router.get('/ranking', generalRanking);
router.get('/better-player', getBetPlayer);
router.get('/worst-player', getWorstPlayer);
router.delete('/delete/:id', deleteGames);


export default router;