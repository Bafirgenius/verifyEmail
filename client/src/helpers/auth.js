import cookie from 'js-cookie';

//Set in Cookie
export const setCookie = (key, value) => {
  if (window !== 'undefiend') {
    cookie.set(key, value, {
      //1Day
      expires: 1,
    });
  }
};

//Remove from cookie
export const removeCookie = (key) => {
  if (window !== 'undifiend') {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

//Get from cookie like token
export const getCookie = (key) => {
  if (window !== 'undifiend') {
    return cookie.get(key);
  }
};

//set in localStorage
export const setLocalStorage = (key, value) => {
  if (window !== 'undifiend') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

//remove from localstorage
export const removeLocalStorage = (key) => {
  if (window !== 'undifiend') {
    localStorage.removeItem(key);
  }
};

//Auth user after login
export const authenticate = (response, next) => {
  setCookie('token', response.data.token);
  setLocalStorage('user', response.data.user);
  next();
};

//signout
export const signout = (next) => {
  removeCookie('token');
  removeLocalStorage('user');
};

//get user info from localstorage
export const isAuth = () => {
  if (window !== 'undifiend') {
    const cookieChecked = getCookie('token');
    if (cookieChecked) {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
      } else {
        return false;
      }
    }
  }
};

//update user data in localstorage
export const updateUser = (response, next) => {
  if (window !== 'undifiend') {
    let auth = JSON.parse(localStorage.getItem('user'));
    auth = response.data;
    localStorage.setItem('user', JSON.stringify(auth));
  }
  next();
};
