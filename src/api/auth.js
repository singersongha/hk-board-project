import { api } from ".";

export const register = async ({name, password}) => {
  const res = await api("/api/auth/register", "post", {name, password})
  return res.data;
}

export const login = async ({name, password}) => {
  const res = await api("/api/auth/login", "post", {name, password})
  return res.data;
}


// register({name: "ddd"}) 객체 형태로 와야 함