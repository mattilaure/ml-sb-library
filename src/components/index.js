import Lobby from "./lobby/Lobby";
import Registration from "./auth/registration/Registration";
import LoginScreen from "./auth/login/LoginScreen";
import Home from "./home/Home";

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
  Home,
  LoginScreen,
  userDuck,
  getRefreshTokenFromStorage,
  getTokenFromStorage,
  setTokenInStorage,
  setRefreshTokenInStorage,
};
