import axios from "axios";

const fetchUserDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://nagarnigam-peach.vercel.app/api/noorpuruser/${id}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return { error: error.message };
  }
};

export default fetchUserDetails;
