import Quill from 'quill';

const BlockEmbed = Quill.import('blots/block/embed');

class Divider extends BlockEmbed {
    static create(options) {
        const node = super.create();

        return node;
    }
}

Divider.blotName = 'divider';
Divider.tagName = 'hr';
Divider.className = 'ql-divider-standard';

export default Divider;
