const GAME = {
  DA_GA: "1",
  BAU_CUA: "2",
  TAI_XIU: "3",
  XOC_DIA: "4",
  BAI_CAO: "5",
};

export const GAME_TYPE = Object.freeze(GAME);
export const getValuesTypeGame = () => {
  return Object.values(GAME);
};
