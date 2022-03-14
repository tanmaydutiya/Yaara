export const logoutAction = () => {
  localStorage.removeItem("userInfo");
  return { type: "REMOVE_USER" };
};

export const loginAction = (userInfo) => {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  return {
    type: "STORE_USER",
    payload: userInfo,
  };
};
