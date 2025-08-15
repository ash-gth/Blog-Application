import axios from "axios";
import { API_NOTIFICATION_MEASSAGES } from "../Constants/config.js";
import { SERVICE_URLS } from "../Constants/config.js";

const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: { "content-type": "application/json" },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (responce) {
    return processResponce(responce);
  },
  function (error) {
    return Promise.reject(processError(error));
  }
);

////////////////////
//   if successs -> return(isSucess : true , data: responce.data)
//   if fail -> return (isFailure:true, status:string, msg:string, code: int)
////////////////////

const processResponce = (responce) => {
  if (responce?.status === 200) {
    return { isSuccess: true, data: responce.data };
  } else {
    return {
      isFailure: true,
      status: responce?.code,
      msg: responce?.msg,
      code: responce?.code,
    };
  }
};

// error -> responce/request/kuch nahi

// if success->
const processError = (error) => {
  if (error.responce) {
    console.log("Error in Responce", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MEASSAGES.responceFailure,
      code: error.responce.status,
    };
    //Request made and server responded with a status other
    // that fails out of range 2.x.x
  } else if (error.request) {
    // Request made but no responce was received
    console.log("Error in REQUEST", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MEASSAGES.requestFailure,
    };
  } else {
    //Something happened in setting up request that triggers an error -> frontend error
    console.log("Something happening");
    return {
      isError: true,
      msg: API_NOTIFICATION_MEASSAGES.networkError,
      code: "",
    };
  }
};

const API = {}; //call api throiugh this object

for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) =>
    axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responceType: value.responceType,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentageCompleted);
        }
      },
    });
}
export { API };
