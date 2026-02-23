import {
  File,
  FileMusic,
  FilePenLine,
  Image,
  Trash,
  Upload,
} from "lucide-react";
import { useState, type DragEvent } from "react";

import {
  imageTypes,
  documentTypes,
  mediaTypes,
} from "@/shared/constants/files.constants";

export function DraggableFileUploader() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }

  function handleDragEnter(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }

  function handleDragLeave(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  }

  function handleDeleteFileFromList(index: number) {
    const newFilesList = files.filter((_, idx) => idx !== index);

    setFiles(newFilesList);
  }

  function handleSelectedFileIcon(file: File) {
    const fileType = file.type.split("/")[1].toLocaleLowerCase();

    if (imageTypes.includes(fileType)) {
      return <Image size={20} className="text-white" />;
    }

    if (documentTypes.includes(fileType)) {
      return <FilePenLine size={20} className="text-white" />;
    }

    if (mediaTypes.includes(fileType)) {
      return <FileMusic size={20} className="text-white" />;
    }

    return <File size={20} className="text-white" />;
  }

  return (
    <div className="flex flex-col w-full items-center gap-4">
      <div
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
            flex flex-col justify-center items-center w-1/2 h-36 border-2 border-dashed rounded-2xl transition-colors
            ${isDragging ? "bg-blue-100 border-blue-500" : "bg-gray-100 border-gray-400"}
            `}
      >
        <Upload size={30} className="text-blue_primary" />
        <span className="text-sm text-blue_primary">
          Drag and drop to upload your files
        </span>

        <input
          type="file"
          multiple
          className="hidden"
          id="fileInput"
          onChange={handleFileSelect}
        />
      </div>

      <label
        htmlFor="fileInput"
        className="cursor-pointer text-sm underline text-blue_primary"
      >
        Or click to select files
      </label>

      <div className="w-1/2 flex flex-col bg-blue_primary rounded-2xl gap-5 p-5">
        <h3 className="text-lg font-bold text-center text-white">
          Files To Be Uploaded
        </h3>

        {files.length > 0 ? (
          <ul className="text-sm">
            {files.map((file, index) => (
              <li
                className="flex justify-between items-center p-2 border-b-2 border-white"
                key={index}
              >
                <span className="flex justify-center items-center gap-3 text-white">
                  <div className="bg-green_victory rounded p-2">
                    {handleSelectedFileIcon(file)}
                  </div>
                  {file.name}
                </span>
                <div
                  className="p-2 rounded-lg border-none bg-red-600 cursor-pointer"
                  onClick={() => handleDeleteFileFromList(index)}
                >
                  <Trash size={20} className="text-white" />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center p-3 text-white">
            No files selected to be uploaded 🤔
          </p>
        )}
      </div>
    </div>
  );
}
