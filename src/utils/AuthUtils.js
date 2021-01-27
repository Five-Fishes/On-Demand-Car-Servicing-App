import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_TOKEN = "AUTH_TOKEN";
const USER_ID = "USER_ID";
const EMPLOYEE_TYPE = "EMPLOYEE_TYPE";
const EMPLOYMENT_BRANCH = "EMPLOYMENT_BRANCH";

let token;

export const getToken = async () => {
  if (token) {
    return Promise.resolve(token);
  }

  token = await AsyncStorage.getItem(AUTH_TOKEN);
  return token;
};

export const signIn = (newToken) => {
  token = newToken;
  return AsyncStorage.setItem(AUTH_TOKEN, newToken);
};

export const signOut = () => {
  token = null;
  return AsyncStorage.removeItem(AUTH_TOKEN);
};

export const setUserInfo = (user) => {
  console.log("SET ASYNC", user);
  setUserId(user.id);
  setEmploymentBranch(user.employmentBranch);
  setEmployeeType(user.employmentType);
};

export const getUserInfo = async () => {
  const userId = await AsyncStorage.getItem(USER_ID);
  const employeeType = await AsyncStorage.getItem(EMPLOYEE_TYPE);
  const employmentBranch = await AsyncStorage.getItem(EMPLOYMENT_BRANCH);
  return { userId, employeeType, employmentBranch };
};

export const setUserId = (userId) => {
  return AsyncStorage.setItem(USER_ID, userId);
};
const setEmployeeType = (employmeeType) => {
  return AsyncStorage.setItem(EMPLOYEE_TYPE, employmeeType);
};
const setEmploymentBranch = (branch) => {
  return AsyncStorage.setItem(EMPLOYMENT_BRANCH, branch);
};

export const getUserId = async () => {
  return await AsyncStorage.getItem(USER_ID);
};
