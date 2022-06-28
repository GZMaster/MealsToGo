import camelize from "camelize";
import { format } from "prettier";
import { locations } from "./locations";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.result[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
