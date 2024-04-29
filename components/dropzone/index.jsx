import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaFilePdf, FaImage, FaFileWord, FaFileAlt, FaTrashAlt, FaFile } from "react-icons/fa";
import useStore from "../../store/store"; // Import the store
import Cloud from "../../assets/icons/cloud.svg";

const MyDropzone = () => {
    const { files, totalFileSize, addFiles, deleteFile } = useStore();
    const [errors, setErrors] = useState([]);

    const maxSize = 20 * 1024 * 1024; // 20MB

    const onDrop = useCallback(
        (acceptedFiles, fileRejections) => {
            const newFiles = acceptedFiles.map((file) => ({
                path: file.path,
                size: file.size,
                type: file.type,
                file: file,
            }));
            console.log(newFiles);

            // Then handle file size accumulation and setting files as you already do
            const newSize = totalFileSize + newFiles.reduce((acc, file) => acc + file.size, 0);
            if (newSize <= maxSize) {
                addFiles(newFiles);
            } else {
                console.error("Total file size limit exceeded.");
                setErrors((prev) => [...prev, "Total file size limit exceeded."]);
            }

            // Handle file rejections
            fileRejections.forEach(({ file, errors }) => {
                errors.forEach((error) => {
                    console.error(`Error: ${file.name} ${error.message}`);
                    setErrors((prev) => [...prev, `${file.name}: ${error.message}`]);
                });
            });
        },
        [totalFileSize, addFiles]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxSize,
        accept: {
            "image/jpeg": [],
            "image/png": [],
            "image/tiff": [],
            "application/pdf": [],
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
        },
    });

    const fileIcon = (type) => {
        if (type.includes("pdf")) return <FaFilePdf />;
        if (type.includes("jpeg") || type.includes("png")) return <FaImage />;
        if (type.includes("tiff")) return <FaFile />;
        if (type.includes("msword") || type.includes("wordprocessingml")) return <FaFileWord />;
        return <FaFileAlt />;
    };

    return (
        <div className="dropzone-container col-span-12 w-full">
            <div
                {...getRootProps()}
                className="w-full h-56 flex items-center justify-center"
                style={{ border: "1px dashed #002a3a", padding: "20px", textAlign: "center" }}
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <div className="bubu">
                        <img src={Cloud.src} alt="" /> <p>Dateien hier her ziehen ...</p>
                    </div>
                ) : (
                    <div className="bubu flex flex-col justify-center items-center">
                        <img src={Cloud.src} alt="" />{" "}
                        <p className="text-primaryColor mt-4">
                            Daten per Drag n Drop hier herziehen, oder per Klick auswählen
                        </p>
                    </div>
                )}
            </div>
            {errors.length > 0 && (
                <div className="text-red-500 text-sm mt-2">
                    {errors.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            )}
            <ul>
                {files.map((file) => (
                    <li key={file.path} className="file-info flex justify-between items-center mt-4">
                        {fileIcon(file.type)} | {file.path} | {Math.round((file.size / 1024 / 1024) * 100) / 100} MB
                        <button onClick={() => deleteFile(file.path)} className="ml-4">
                            <FaTrashAlt color="red" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyDropzone;
