import axios from "axios";

const strapiUrl = "http://localhost:1337";

export async function signIn({ username, password }) {
  const res = await axios.post(`${strapiUrl}/api/auth/local`, {
    identifier: username,
    password,
  });
  return res.data;
}
