import React from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import './style.css';

import './Modules/Divider';
import './Formats/tilt';


const Editor = ({ onChange, name, value }) => {
    const toolbar = [ // toolbar container
        [{header: [1, 2, 3, 4, 5, 6, false]}],
        [{font: []}],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', { divider: ['[Divider]','fancy','standard'] }, { tilt: ['[Tilt]','up','down'] }],
        [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
        ['link', 'clean'],
    ];

    const clipboard = {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    };

    const history = {
        delay: 2000,
        maxStack: 500,
        userOnly: true,
    };

    const modules = {
        toolbar,
        clipboard,
        history,
        divider: true,
    };

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
        // custom formats
        'tilt',
        'divider',
    ];

    return (
        <ReactQuill
            theme="snow"
            value={value}
            modules={modules}
            formats={formats}
            onChange={content => {
                onChange({target: {name, value: content}});
            }}
        />
    );
};

export default Editor;
