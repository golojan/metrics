import React, { useState } from "react";
import { EditorState, convertFromRaw, convertToRaw, RichUtils } from "draft-js";
import dynamic from "next/dynamic";
const { handleNewLine, insertNewUnstyledBlock } = require("draftjs-utils");

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleChange = (state: EditorState) => {
    setEditorState(state);
  };
  const uploadImageCallBack = async (file: any) => {
    alert(0);
    // return Promise.resolve({ data: {
    //   link: ``
    // }});
  };

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={handleChange}
      wrapperClassName="editor-wrapper"
      toolbarClassName="flex top-0 z-50 !bg-[#e6f4f885] !justify-center mx-auto "
      editorClassName="bg-[#ffffffe5] mt-2 shadow-lg w-full mb-2 border px-2 min-h-[150px]"
      //   editorStyle={{ lineHeight: "50%" }}
      handleReturn={(event: any) => {
        // override behavior for enter key
        var newEditorState: any = null;
        if (event.keyCode === 13 && event.shiftKey) {
          // with shift, make a new block
          newEditorState = insertNewUnstyledBlock(editorState);
        } else if (event.keyCode === 13 && !event.shiftKey) {
          // without shift, just a normal line break
          newEditorState = RichUtils.insertSoftNewline(editorState);
        }
        if (newEditorState) {
          //   alert(0);
          setEditorState(newEditorState);
          return true;
        }
        return false;
      }}
      toolbar={{
        options: [
          "inline",
          "blockType",
          "fontSize",
          "fontFamily",
          "list",
          "textAlign",
          "colorPicker",
          "link",
          "embedded",
          "emoji",
          "image",
          "remove",
          "history",
        ],
        inline: {
          inDropdown: false,
          options: [
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "monospace",
          ],
        },
        list: { inDropdown: false },
        textAlign: { inDropdown: false },
        link: { inDropdown: false },
        history: { inDropdown: false },
        image: {
          urlEnabled: true,
          uploadEnabled: true,
          uploadCallback: { uploadImageCallBack },
          previewImage: true,
          alt: { present: false, mandatory: false },
        },
      }}
    />
  );
};

export default MyEditor;
