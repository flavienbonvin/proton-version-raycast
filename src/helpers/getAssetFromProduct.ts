import { protonProductsPath } from "../constants";
import { ProtonProduct } from "../interface";

export const getAssetFromProduct = (product: ProtonProduct) => {
  switch (product) {
    case "Proton Mail":
      return `${protonProductsPath}/ProtonMail.svg`;
    case "Proton Drive":
      return `${protonProductsPath}/ProtonDrive.svg`;
    case "Proton Calendar":
      return `${protonProductsPath}/ProtonMail.svg`;
    case "Proton Account":
      return "";
  }
};
