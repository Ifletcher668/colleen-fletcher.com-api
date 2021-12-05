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

// var tiltButton = document.querySelector('.ql-tilt');

// tiltButton.addEventListener('click', function() {
//         var range = quill.getSelection();
//         if( range ){
//             quill.formatText(range,'tilt');
//         }
//     }
// );


let BlockEmbed = Quill.import('blots/block/embed');

class DividerBlot extends BlockEmbed { }
DividerBlot.blotName = 'divider';
DividerBlot.tagName = 'hr';
Quill.register(DividerBlot);

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
