import { userResolver } from "./userResolver.js";

export default {
  Query: {
    ...userResolver.Query,
  },
};
