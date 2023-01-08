export const usersUrl = (username: string) =>
  "users" + (username ? "/" + username : "");
