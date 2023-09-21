"use client";

import { UploadButton } from "@/utils/uploadthing";

import { Icons } from "./icons/icons";

function UploadBtn({ text, setImage }: { text?: string; setImage?: any }) {
  return (
    <UploadButton
      className="ut-button:bg-foreground ut-button:flex ut-button:text-background ut-button:hover:bg-foreground/80 ut-upload-icon:text-background ut-button:ut-readying:bg-foreground/80
         ut-label:text-background ut-allowed-content:text-foreground ut-uploading:text-destructive font-heading"
      endpoint="profilePicture"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files:=====================😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊", res[0].url);
        setImage(res[0].url);
        // alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
      appearance={{
        allowedContent: "",
        button: "",
        container: "",
      }}
      onUploadBegin={(name) => console.log(name)}
      // onUploadBegin={}
      // onUploadProgress={}
      content={{
        button({ ready, fileTypes, isUploading, uploadProgress }) {
          // if (ready) return <div className="font-sans">Upload 1!</div>;
          if (isUploading)
            return (
              <div className="font-heading">
                <Icons.spinner className="animate-spin" />
              </div>
            );
          if (uploadProgress) return <div className="font-heading">Upload 3 !</div>;
          return <div className="font-heading my-auto font-semibold">{text ?? "Upload"}</div>;
        },
        allowedContent({ ready, fileTypes, isUploading, uploadProgress }) {
          if (!ready) return "Checking what you allow";
          if (isUploading) return "Uploading....";
          // return `Stuff you can upload: ${fileTypes.join(", ")}`;
        },
      }}
    />
  );
}

export default UploadBtn;
