import Quill from 'quill';


const Inline = Quill.import('blots/inline');
const whitelist = ['even', 'up', 'down'];

class Tilt extends Inline {
    static create (value) {
        if (!whitelist.includes(value)) value = 'even';
        let node = super.create();
        node.setAttribute ('class', `ql-divider${value}`);
        return node;
    }
};

Tilt.blotName = 'tilt';
Tilt.tagName = 'span';
Quill.register(Tilt);