import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

let Inline = Quill.import('blots/inline');

class Tilt extends Inline {
    static create(value){
        let node = super.create();
        node.setAttribute('class','tilt');
        return node;
    }
};

Tilt.blotName = 'tilt';
Tilt.tagName = 'div';
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

const Editor = ({onChange, name, value}) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }, { size: [] }, 'tilt'],
            [],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
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

    var tiltButton = document.querySelector('.ql-tilt');

tiltButton.addEventListener('click', function() {
        var range = quill.getSelection();
        if(range){
            console.log('range is valid');
            quill.formatText(range,'tilt');
        }else{
            console.log('it it invalid');
        }

    }
);
    const formats = [
        'header',
        'font',
        'size',
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
