import { urlAPI } from "./constants";
import NetInfo from "@react-native-community/netinfo";

export const NetInfoFetch = async (url: string, token: string | null, noConnectionFunction: () => void, badRequestFuction: (erro?: any) => void, errorFunction: (responseJson?: any) => void, successFunction: (responseJson?: any) => void) => {
  try {
    NetInfo.fetch().then(state => {
      if (state.isConnected === false) {
        noConnectionFunction();
      } else {
        fetch(urlAPI + url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token == null || token == undefined ? '' : token,
          },
          // body: JSON.stringify(jsonBody),
        }).then((response) => {
          response.json().then((responseJson) => {
            if (responseJson.status.toString().toLowerCase() == "erro") {
              errorFunction(responseJson);
            } else {
              successFunction(responseJson);
            }
          }).catch((error) => {
            badRequestFuction(error)
          })
        }).catch((error) => {
          badRequestFuction(error)
        });
      }
    })
  } catch (error) {
    badRequestFuction(error)
  }
}