import axios from "axios";
import { toast } from "react-toastify";

export const getCurrentUserDetails = async () => {
  try {
    const response = await axios.get(
      `https://nagarnigam-peach.vercel.app/api/garbagecollector/currentuser`
    );

    return response.data.user;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return { error: error.message };
  }
};

export const loginGarbageCollectorDetails = async (crendtials) => {
  try {
    const response = await axios.post(
      `https://nagarnigam-peach.vercel.app/api/garbagecollector/login`,
      crendtials
    );
    toast.success("Login sucessfully");
    return response;
  } catch (error) {
    console.error("Error fetching user details:", error);
    toast.error(error.message);
    return { error: error.message };
  }
};

export const signupGarbageCollectorDetails = async (crendtials) => {
  try {
    const response = await axios.post(
      `https://nagarnigam-peach.vercel.app/api/garbagecollector/signup`,
      crendtials
    );
    toast.success("Signup sucessfully");
    return response;
  } catch (error) {
    console.error("Error fetching user details:", error);
    toast.error(error.message);
    return { error: error.message };
  }
};

export const garbageCollectorLogout = async () => {
  try {
    const response = await axios.post(
      `https://nagarnigam-peach.vercel.app/api/garbagecollector/logout`
    );
    toast.warning("Logout sucessfully");
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    toast.error(error.message);
  }
};
