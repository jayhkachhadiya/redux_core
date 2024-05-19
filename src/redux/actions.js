export const userRegister = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};
export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
export const USER_INFO = (id) => {
  return {
    type: "USER_INFO",
    payload: id,
  };
};
// export const updateUser = (data) => {
//   return {
//     type: "UPDATE_USER",
//     payload: data,
//   };
// };

export const updateUser = (index, updatedUserData,status) => {
  console.log(index ,"index", updatedUserData,"updatedUserData",status,"status")
  return {
    type: 'UPDATE_USER',
    payload: { index, updatedUserData,status },
  };
};