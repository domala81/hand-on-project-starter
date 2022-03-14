import React, { useRef, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./BGRemoverApp.module.css";
import InsertImageIcon from "../../utils/InsertImageIcon.svg";
import axios from "axios";

function RightInterface() {
  const fileInputRef = useRef();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [bgRemovedImage, setBgRemovedImage] = useState("");
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (file) => {
      if (file.length > 1) {
        setImage(null);
        alert("Only 1 file can be uploaded at once!");
      } else if (file[0].size > 4999999) {
        setImage(null);
        alert("File size should be less than 5MB");
      } else {
        setImage(file[0]);
      }
    },
  });

  useEffect(() => {
    if (bgRemovedImage) {
      setPreview("data:image/png;base64," + bgRemovedImage);
    } else if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        console.log(reader.result);
        axios
          // eslint-disable-next-line no-undef
          .post("/bgremover/upload", {
            image: reader.result,
          })
          .then((res) => {
            console.log(res.data.result_b64);
            setBgRemovedImage(res.data.result_b64);
          });
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image, bgRemovedImage]);

  return (
    <div className={styles.insertBoard}>
      <div className={styles.insertBox} {...getRootProps()}>
        <div>
          {preview ? (
            <div className={styles.insertContent}>
              <img
                src={preview}
                style={{ objectFit: "cover", maxWidth: "80%" }}
              />
              <button
                className={styles.uploadButton}
                onClick={(event) => {
                  event.preventDefault();
                  setImage(null);
                  setBgRemovedImage(null);
                }}
              >
                Remove Image
              </button>
              {bgRemovedImage && (
                <a
                  href={`data:image/png;base64,${bgRemovedImage}`}
                  download={"Image.png"}
                  className={styles.uploadButton}
                  style={{ textDecoration: "none" }}
                >
                  Download Image
                </a>
              )}
            </div>
          ) : (
            <div className={styles.insertContent}>
              <img
                src={InsertImageIcon}
                className={styles.imageIcon}
                alt="Insert Image Icon"
              />
              <p className={styles.fileDescription}>
                File should be png, jpg and less than 5mb
              </p>
              <button
                type="button"
                className={styles.uploadButton}
                onClick={(event) => {
                  event.preventDefault();
                  fileInputRef.current.click();
                }}
              >
                Upload Image <span> &#8594; </span>
              </button>
              <p className={styles.fileDrop}>Or drop a file</p>

              <input
                {...getInputProps()}
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files[0];
                  if (file) {
                    if (!file.type.includes("image")) {
                      setImage(null);
                      return alert("File format must be .jpg, .png, .jpeg");
                    } else if (file.size > 4999999) {
                      setImage(null);
                      return alert("File size should be less than 5MB");
                    } else {
                      setImage(file);
                    }
                  } else {
                    setImage(null);
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RightInterface;
