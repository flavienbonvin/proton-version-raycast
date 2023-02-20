import { Environment } from "../interface";

export const getEnvironmentString = (environment: Environment) => {
  if (environment === "beta") {
    return "β";
  }
  return "";
};
