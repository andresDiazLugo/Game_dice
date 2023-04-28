export const rollDices = ()=>{
    const dice_1 =  Math.floor(Math.random() * 7);
    const dice_2 =  Math.floor(Math.random() * 7);
    const veredict = dice_1 + dice_2 === 7 ? 'win' : 'lose';
    
    return{
        dice_1,
        dice_2,
        rollScore: dice_1 + dice_2,
        veredict,
    }
}