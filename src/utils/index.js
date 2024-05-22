// import { GAME_TYPE } from "@/constant/enums/Game";
// import { Message } from "@/constant/Message";

// //end game1
// const calculateTokens = (isGreen, token) => {
//   // Green = 0, increase red amount (assuming it means decrease token amount)
//   let newTokenAmount = 0.95 * token;
//   if (isGreen) {
//     // Green = 1, increase token amount
//     newTokenAmount = 0.95 * (token / 0.8);
//   }
//   return newTokenAmount;
// };

// const endGame01 = () => {};

// const condition = (tokenUser, tokenGame, typeGame, nen) => {
//   const { tokenBet, tokenCurrent, isGreen } = tokenUser;
//   const tokenOld = tokenCurrent - tokenBet;

//   let message = "";
//   let newToken = 0;
//   switch (typeGame) {
//     case GAME_TYPE.DA_GA: {
//       const { green, red } = tokenGame;
//       const total = green + red;
//       const scale = (tokenBet + green - red) / red;
//       if (total > nen && Math.abs(scale) > 0.2) {
//         message = Message.over;
//         break;
//       }

//       newToken = calculateTokens(isGreen, tokenOld);
//       break;
//     }
//     case GAME_TYPE.BAU_CUA: {
//       break;
//     }
//     case GAME_TYPE.TAI_XIU: {
//     }
//     case GAME_TYPE.XOC_DIA: {
//     }
//     case GAME_TYPE.BAI_CAO: {
//     }
//     default:
//       break;
//   }
// };

// export { endGame01, condition };
