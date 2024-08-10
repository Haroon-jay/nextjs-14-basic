export const MY_NAME = "Haroon Jawad";

export const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const loginCredentials = {
  email: "test@testing.com",
  password: "12345678",
  name: "Test",
};

export const cookieConfig = {
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};
