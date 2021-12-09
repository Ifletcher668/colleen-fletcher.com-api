import React, {Fragment} from 'react';
import ReactQuill from 'react-quill';
import './Modules/Divider';
import 'react-quill/dist/quill.snow.css';
import './style.css';
import Toolbar from './Toolbar';

const Editor = ({onChange, name, value}) => {
    const toolbar = [
        [{header: [1, 2, 3, 4, 5, 6, false]}],
        [{font: []}],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'divider'],
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
            onChange={content => {
                onChange({target: {name, value: content}});
            }}
        />
    );
};

export default Editor;
