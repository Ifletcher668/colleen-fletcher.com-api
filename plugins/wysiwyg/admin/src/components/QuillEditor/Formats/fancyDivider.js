import Quill from 'quill';

const BlockEmbed = Quill.import('blots/block/embed');

class Divider extends BlockEmbed {
    static create(options) {
        const node = super.create();
        console.log(options);
        return node;
    }
}

Divider.blotName = 'fancyDivider';
Divider.tagName = 'hr';
Divider.className = 'ql-divider-fancy';

export default Divider;
