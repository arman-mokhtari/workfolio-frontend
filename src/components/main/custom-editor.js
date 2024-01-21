import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "outdent",
    "indent",
    "|",
    "insertImage",
    "blockQuote",
    "insertTable",
    "mediaEmbed",
    "|",
    "undo",
    "redo",
    "|",
    "alignment",
    "codeBlock",
    "code",
    "fontColor",
    "fontSize",
    "fontFamily",
    "horizontalLine",
    "sourceEditing",
    "highlight",
    "style",
    "htmlEmbed",
    "showBlocks",
    "specialCharacters",
    "strikethrough",
  ],
  items: [
    'style',
],
style: {
  definitions: [
    {
        name: 'Article category',
        element: 'h3',
        classes: [ 'category' ]
    },
    {
        name: 'Title',
        element: 'h2',
        classes: [ 'document-title' ]
    },
    {
        name: 'Subtitle',
        element: 'h3',
        classes: [ 'document-subtitle' ]
    },
    {
        name: 'Info box',
        element: 'p',
        classes: [ 'info-box' ]
    },
    {
        name: 'Side quote',
        element: 'blockquote',
        classes: [ 'side-quote' ]
    },
    {
        name: 'Code (dark)',
        element: 'pre',
        classes: [ 'fancy-code', 'fancy-code-dark' ]
    },
    {
        name: 'Code (bright)',
        element: 'pre',
        classes: [ 'fancy-code', 'fancy-code-bright' ]
    }
]
},
  removePlugins: ["MediaEmbedToolbar"],
  heading: {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      {
        model: "heading1",
        view: "h1",
        title: "Heading 1",
        class: "ck-heading_heading1",
      },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "ck-heading_heading2",
      },
      {
        model: "heading3",
        view: "h3",
        title: "Heading 3",
        class: "ck-heading_heading3",
      },
      {
        model: "heading4",
        view: "h4",
        title: "Heading 4",
        class: "ck-heading_heading4",
      },
      {
        model: "heading5",
        view: "h5",
        title: "Heading 5",
        class: "ck-heading_heading5",
      },
      {
        model: "heading6",
        view: "h6",
        title: "Heading 6",
        class: "ck-heading_heading6",
      },
    ],
  },
};

function CustomEditor(props) {
  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data={props.initialData}
      onChange={props.onChange}
    />
  );
}

export default CustomEditor;
