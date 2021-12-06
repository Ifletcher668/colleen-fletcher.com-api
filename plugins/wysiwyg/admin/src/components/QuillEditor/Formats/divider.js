import Quill from 'quill';

const BlockEmbed = Quill.import('blots/block/embed');
const whitelist = ['standard', 'fancy'];

class Divider extends BlockEmbed {
    static create (value) {
        if (!whitelist.includes(value)) value = 'standard';
        const node = super.create();
        node.setAttribute('contenteditable', false);
        node.setAttribute ('class', `ql-divider${value}`);
        return node;
    }
}

Divider.blotName = 'divider';
Divider.tagName = 'hr';
Divider.whitelist = whitelist;

export default Divider;
