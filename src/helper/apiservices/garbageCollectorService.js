import axios from "axios";
import { toast } from "react-toastify";
import { httpService } from "./httpserivce";

export const getCurrentUserDetails = async () => {
  try {
    const response = await axios.get(
      `${httpService}/garbagecollector/currentuser`
    );
    console.log({ response });
    return response.data;
  } catch (error) {
    console.log({error});
  }
};

export const loginGarbageCollectorDetails = async (crendtials) => {
  try {
    const response = await axios.post(
      `${httpService}/garbagecollector/login`,
      crendtials
    );
    toast.success("Login sucessfully");
    return response;
  } catch (error) {
    console.log(error);
    toast.error("Internal Server Issue");
  }
};

export const signupGarbageCollectorDetails = async (crendtials) => {
  try {
    const response = await axios.post(
      `${httpService}/garbagecollector/signup`,
      crendtials
    );
    toast.success("Signup sucessfully");
    console.log({ response });
    return response;
  } catch (error) {
    console.log(error);
    toast.error("Internal Server Issue");
  }
};

export const garbageCollectorLogout = async () => {
  try {
    const response = await axios.post(`${httpService}/garbagecollector/logout`);
    toast.warning("Logout sucessfully");
    console.log({ response });
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Internal Server Issue");
  }
};
