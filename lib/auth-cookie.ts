import Cookies from "js-cookie";

export function addAuthCookie(token: string) {
  Cookies.set("authToken", token, { secure: true, sameSite: 'strict' });
}

export function removeAuthCookie() {
  Cookies.remove("authToken");
}

export function getAuthCookie() {
  return Cookies.get("authToken");
}