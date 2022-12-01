import Lobby from "./lobby/Lobby";
import Registration from "./auth/registration/Registration";
import LoginScreen from "./auth/login/LoginScreen";

//utils
import {
  getTokenFromStorage,
  setTokenInStorage,
  setRefreshTokenInStorage,
  getRefreshTokenFromStorage,
} from "./utils/storage";

//ducks
import userDuck from "./ducks/user/userDuck";

export {
  Registration,
  Lobby,
  LoginScreen,
  userDuck,
  getRefreshTokenFromStorage,
  getTokenFromStorage,
  setTokenInStorage,
  setRefreshTokenInStorage,
};
