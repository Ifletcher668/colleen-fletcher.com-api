import React, { Fragment } from 'react';
import ReactQuill from 'react-quill';
import './Modules/Divider';
import './Modules/Tilt';
import 'react-quill/dist/quill.snow.css';
import './style.css';
import Toolbar from './Toolbar';


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
