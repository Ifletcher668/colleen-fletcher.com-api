import React, { Fragment } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import './ToolbarButtons/Divider';
import 'react-quill/dist/quill.snow.css';
import './style.css';
import Toolbar from './Toolbar';

let Inline = Quill.import('blots/inline');

class Tilt extends Inline {
    static create(){
        let node = super.create();
        node.setAttribute('class', 'tilt');
        return node;
    }
};

Tilt.blotName = 'tilt';
Tilt.tagName = 'span';
Quill.register(Tilt);


const Editor = ({onChange, name, value}) => {
    const modules = {
        toolbar: '#toolbar',
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
        <Fragment>
            <Toolbar />
            <ReactQuill
                theme="snow"
                value={value}
                modules={modules}
                formats={formats}
                onChange={(content) => {
                    onChange({target: {name, value: content}});
                }}
            />
        </Fragment>
    );
};

export default Editor;
