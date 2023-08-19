import User from "../../models/User.js";

export const userResolver = {
  Query: {
    getUser: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.log("Error Occurred", error);
      }
    },
  },
};
