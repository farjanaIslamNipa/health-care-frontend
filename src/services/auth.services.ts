
import {authKey} from "@/constants/authkey"
import {setToLocalStorage} from "@/utils/localStorage"

export const storeUserInfo = ({accessToken} : {accessToken: string}) => {
  return setToLocalStorage(authKey, accessToken)
}