import { error } from "console";
import { v4 as uuidv4 } from "uuid";
const destinationFolder = "./public/images";
import path from "path";
import fs from "fs";

export const base64Conversion = (list: any[]) => {
  const imagePaths: string[] = [];
  for (let image of list) {
    try {
      const imageData = Buffer.from(image, "base64");
      const fileName = `${uuidv4()}.png`;
      const destinationPath = path.join(destinationFolder, fileName);
      imagePaths.push(destinationPath);
      fs.writeFileSync(destinationPath, imageData);
    } catch (err) {
      console.log(error);
    }
  }
  // console.log(imagePaths);
  return imagePaths;
};
