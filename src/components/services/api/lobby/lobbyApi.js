import APIROUTES from "../apiRules";
import { deleteApi, postApi, putApi } from "../../genericServices";

export async function createNewLobby(obj) {
  return await postApi(APIROUTES.createLobby, obj);
}

export async function joinLobby(id) {
  return await putApi(`${APIROUTES.createLobby}/${id}`);
}

export async function deleteLobby(){
  return await deleteApi(APIROUTES.createLobby);
}