export const TOKEN_KEY = '@Token';
export const Email = '@Email';
export const Username = '@Username';
export const Roles = '@Roles';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getEmail = () => localStorage.getItem(Email);
export const getUsername = () => localStorage.getItem(Username);
export const getRoles = () => localStorage.getItem(Roles);

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const useremail = email => {
  localStorage.setItem(Email, email);
};
export const username = username => {
  localStorage.setItem(Username, username);
};
export const role = role => {
  localStorage.setItem(Roles, role);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  window.location.href = '/';
};
