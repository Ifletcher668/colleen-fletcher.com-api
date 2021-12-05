import Quill from 'quill';

const BlockEmbed = Quill.import('blots/block/embed')


class Divider extends BlockEmbed {
    static create (value) {
        const parentNode = super.create(value)
        parentNode.setAttribute('contenteditable', false)
        parentNode.innerHTML = `<hr class='ql-divider ql-divider-${value}' />'`
        return parentNode
    }
}

Divider.blotName = 'divider'
Divider.tagName = 'p'
export default Divider;
