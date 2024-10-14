"use client";

import { UploadButton, UploadDropzone, Uploader } from "@/utils/uploadthing";

import { Separator } from "@referrer/ui";

import { Icons } from "@/components/icons/icons";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
// import "@uploadthing/react/styles.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        className="ut-button:bg-foreground ut-button:flex ut-button:text-background ut-button:hover:bg-foreground/80 ut-upload-icon:text-background ut-button:ut-readying:bg-foreground/80
         ut-label:text-background ut-allowed-content:text-foreground ut-uploading:text-destructive font-heading"
        endpoint="profilePicture"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files:=====================😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊", res);
          alert("Upload Completed");
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
            console.log("button ready :=====================😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊", ready);
            console.log(
              "button  fileTypes:=====================😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊",
              fileTypes
            );
            console.log(
              "button isUploading :=====================😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊",
              isUploading
            );
            console.log(
              "button uploadProgress :=====================😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊",
              uploadProgress
            );
            // if (ready) return <div className="font-sans">Upload 1!</div>;
            if (isUploading)
              return (
                <div className="font-heading">
                  <Icons.spinner className="animate-spin" />
                </div>
              );
            if (uploadProgress) return <div className="font-heading">Upload 3 !</div>;
            return <div className="font-heading my-auto font-semibold">Upload !</div>;
          },
          allowedContent({ ready, fileTypes, isUploading, uploadProgress }) {
            if (!ready) return "Checking what you allow";
            if (isUploading) return "Uploading....";
            // return `Stuff you can upload: ${fileTypes.join(", ")}`;
          },
        }}
      />
      <Separator />
      <UploadDropzone endpoint="imageUploader" />
      <Separator />
      <Uploader endpoint="imageUploader" />
    </main>
  );
}
// return <Icons.spinner />;
