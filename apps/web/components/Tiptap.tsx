"use client";

import CharacterCount from "@tiptap/extension-character-count";
import Link from "@tiptap/extension-link";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { cn } from "@/utils";

const RichTextEditor = ({
  value,
  onChange,
  className,
  placeholder,
  charactersLimit,
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  charactersLimit?: number;
}) => {
  const limit = charactersLimit;
  const editor = useEditor({
    autofocus: "end",
    editorProps: {
      attributes: {
        class: cn(
          "border-input placeholder:text-muted-foreground focus-visible:ring-ring min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
      },
    },
    extensions: [
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-4",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-4",
          },
        },
      }),
      CharacterCount.configure({
        limit,
      }),
      Link.configure({
        openOnClick: true,
        autolink: true,
        defaultProtocol: "https",
        HTMLAttributes: {
          class: "text-blue-400 cursor-pointer font-bold",
          // Change rel to different value
          // Allow search engines to follow links(remove nofollow)
          rel: "noopener noreferrer",
          // Remove target entirely so links open in current tab
          target: null,
        },
      }),
    ],
    content: value, // Set the initial content with the provided value
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML()); // Call the onChange callback with the updated HTML content
    },
  });
  const percentage = editor ? Math.round((100 / limit) * editor.storage.characterCount.characters()) : 0;
  return (
    <>
      <EditorContent placeholder={placeholder} editor={editor} />
      {editor && (
        <div
          className={`ml-3 flex items-center gap-3 text-xs ${
            editor.storage.characterCount.characters() === limit ? "text-red-600" : ""
          }`}>
          <svg height="14" width="14" viewBox="0 0 20 20">
            <circle r="10" cx="10" cy="10" fill="#000" />
            <circle
              r="5"
              cx="10"
              cy="10"
              fill="transparent"
              stroke={editor.storage.characterCount.characters() === limit ? "#cb2424" : "#05FB31"}
              strokeWidth="10"
              strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
              transform="rotate(-90) translate(-20)"
            />
            <circle r="6" cx="10" cy="10" fill="black" />
          </svg>
          {editor.storage.characterCount.characters()} / {limit} characters
        </div>
      )}
    </>
  );
};

export default RichTextEditor;
