import APIROUTES from "../apiRules";
import { postApi } from "../../genericServices";

export async function createNewLobby(){
    return await postApi(APIROUTES.createLobby)
}