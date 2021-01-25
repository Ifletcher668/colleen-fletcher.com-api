import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({onChange, name, value}) => {
    const modules = {
        toolbar: [
            [{header: []}, {font: []}],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                {list: 'ordered'},
                {list: 'bullet'},
                {indent: '-1'},
                {indent: '+1'},
            ],
            ['link'],
            ['clean'],
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
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
    ];

    return (
        <ReactQuill
            theme="snow"
            value={value}
            modules={modules}
            formats={formats}
            onChange={(content, event, editor) => {
                onChange({target: {name, value: content}});
            }}
        />
    );
};

export default Editor;
