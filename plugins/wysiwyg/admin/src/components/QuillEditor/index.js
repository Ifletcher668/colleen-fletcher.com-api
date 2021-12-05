import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

let Inline = Quill.import('blots/inline');

class Tilt extends Inline {
    static create(){
        let node = super.create();
        node.setAttribute('class','tilt');
        return node;
    }
};

Tilt.blotName = 'tilt';
Tilt.tagName = 'span';
Quill.register(Tilt);



let BlockEmbed = Quill.import('blots/block/embed');

class DividerBlot extends BlockEmbed { }
DividerBlot.blotName = 'divider';
DividerBlot.tagName = 'hr';
Quill.register(DividerBlot);

// $('#divider-button').click(function() {
//     let range = quill.getSelection(true);
//     quill.insertText(range.index, '\n', Quill.sources.USER);
//     quill.insertEmbed(range.index + 1, 'divider', true, Quill.sources.USER);
//     quill.setSelection(range.index + 2, Quill.sources.SILENT);
//   });

const Editor = ({onChange, name, value}) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }, { size: [] }, 'tilt'],
            [],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'divider'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'clean'],
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
        history: {
            delay: 2000,
            maxStack: 500,
            userOnly: true
          }
    };

    const formats = [
        'header',
        'font',
        'size',
        'tilt',
        'divider',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
    ];

    return (
        <ReactQuill
            theme="snow"
            value={value}
            modules={modules}
            formats={formats}
            onChange={(content) => {
                onChange({target: {name, value: content}});
            }}
        />
    );
};

export default Editor;
