const ROLE = {
  SUPPER_USER: "SUPPER_USER",
  ADMIN: "ADMIN",
  USER: "USER",
  CREATE_GAME: 'CREATE_GAME',
  END_GAME: 'END_GAME',
  INPUT_TOKEN:'INPUT_TOKEN',
  WITHDRAW_TOKEN:'WITHDRAW_TOKEN'
};

export const ROLE_USER = Object.freeze(ROLE);
export const getValuesRole = () => {
  return Object.values(ROLE);
};
