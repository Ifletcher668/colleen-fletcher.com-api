import React from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import './style.css';

import './Modules/FancyDivider';
import './Modules/Divider';
import './Formats/tilt';

const Editor = ({onChange, name, value}) => {
    const toolbar = [
        // toolbar container
        [{header: [1, 2, 3, 4, 5, 6, false]}, {font: []}, {size: []}],
        [
            'bold',
            'italic',
            'underline',
            'strike',
            'blockquote',
            'divider',
            'fancyDivider',
            {tilt: ['[Tilt]', 'up', 'down']},
        ],
        [{align: []}, {indent: '-1'}, {indent: '+1'}],
        [{list: 'ordered'}, {list: 'bullet'}],
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
        fancyDivider: true,
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
        'align',
        // custom formats
        'tilt',
        'divider',
        'fancyDivider',
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
