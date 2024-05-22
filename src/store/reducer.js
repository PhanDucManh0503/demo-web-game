const type = {
  USER_LOGIN: "user-login",
};
export const TypeActionStore = Object.freeze(type);

export const reducer = (state, action) => {
  switch (action.type) {
    case TypeActionStore.USER_LOGIN: {
      return {
        ...state,
        userLogin: action.payload,
      };
    }
  }
};