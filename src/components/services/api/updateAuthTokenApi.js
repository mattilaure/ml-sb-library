import { postApiNoAuth } from "../genericServices";
import { getRefreshTokenFromStorage } from "../../utils/storage";

export async function updateAuthTokenApi() {
  const refToken = await getRefreshTokenFromStorage();
  return await postApiNoAuth("updateAuthToken", {
    refreshToken: refToken
  });
}
