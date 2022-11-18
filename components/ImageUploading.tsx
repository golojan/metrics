import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const { Upload } = require("upload-js");
const upload = Upload({ apiKey: "public_12a1xrd86dBd9ccC1KzXUKPtsqRn" });

import CircleLoader from "react-spinners/SyncLoader";
import { blogImageAtom, imageUrlAtom, uploadedAtom } from "../store";
import { useAtom } from "jotai";

const ImageUploader = () => {
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState("");
  const [imageurl, setImageUrl] = useAtom(imageUrlAtom);
  const [createObjectURL, setCreateObjectURL] = useAtom(blogImageAtom);

  const [uploaded, setUploaded] = useAtom(uploadedAtom);

  const fileInput: any = useRef(null);
  const handleClick = () => {
    fileInput.current.click();
  };

  const uploadToClient = async (event: any) => {
    event.preventDefault();

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const { fileUrl, filePath } = await upload.uploadFile(file, {
        onBegin: ({ cancel }: any) => {
          setUploading(false);
        },
        onProgress: ({ bytesSent, bytesTotal }: any) => {
          setUploading(true);
        },
        path: {
          folderPath: "/uploads/primeintakes/{UTC_YEAR}/{UTC_MONTH}/{UTC_DAY}",
          fileName: "{UNIQUE_DIGITS_8}{ORIGINAL_FILE_EXT}",
        },
      });
      setImage(file);
      setCreateObjectURL(URL.createObjectURL(file));
      setUploading(false);
      setImageUrl(fileUrl);
    }
  };

  return (
    <span>
      {uploading ? (
        <CircleLoader
          color="#66789c"
          loading={true}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Link href="#" legacyBehavior>
          <a onClick={handleClick}>
            <Image
              src={createObjectURL}
              width={100}
              height={100}
              alt={""}
              style={{ margin: "0 auto" }}
            />
          </a>
        </Link>
      )}

      <input
        id="avatar"
        type="file"
        name="avatar"
        ref={fileInput}
        required={true}
        className="form-control d-none"
        onChange={uploadToClient}
      />
    </span>
  );
};

export default ImageUploader;
