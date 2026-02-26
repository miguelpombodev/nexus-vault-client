import {
  File,
  FileMusic,
  FilePenLine,
  Image,
  type LucideIcon,
} from "lucide-react";

import {
  documentTypes,
  imageTypes,
  mediaTypes,
} from "../constants/files.constants";

export function handleSelectedFileIcon(fileExtension: string): LucideIcon {
  if (fileExtension.includes("/")) {
    fileExtension = fileExtension.split("/")[1].toLocaleLowerCase();
  }

  if (imageTypes.includes(fileExtension)) {
    return Image;
  }

  if (documentTypes.includes(fileExtension)) {
    return FilePenLine;
  }

  if (mediaTypes.includes(fileExtension)) {
    return FileMusic;
  }

  return File;
}
