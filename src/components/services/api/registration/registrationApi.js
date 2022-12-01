import { postApiNoAuth } from "../../genericServices";
import APIROUTES from "../apiRules";

export async function signUpApi(obj) {
  return await postApiNoAuth(APIROUTES.registration, obj);
}
