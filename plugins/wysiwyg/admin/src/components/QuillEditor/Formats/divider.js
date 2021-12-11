import Quill from 'quill';

const BlockEmbed = Quill.import('blots/block/embed');

class Divider extends BlockEmbed {
    static create (options) {
        const node = super.create();
        node.setAttribute('contenteditable', false);
        node.setAttribute ('class', `ql-divider-${options.value}`);
        return node;
    }
}

Divider.blotName = 'divider';
Divider.tagName = 'hr';

export default Divider;
