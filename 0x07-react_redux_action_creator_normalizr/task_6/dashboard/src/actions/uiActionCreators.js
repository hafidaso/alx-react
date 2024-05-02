import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export const logout = () => ({ type: LOGOUT });

export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

export const boundLogout = () => dispatch(logout());

export const boundLogin = (email, password) => dispatch(login(email, password));
