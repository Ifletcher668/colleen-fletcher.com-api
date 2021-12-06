import Quill from 'quill';

const BlockEmbed = Quill.import('blots/block/embed')
const whitelist = ['standard', 'fancy'];

class Divider extends BlockEmbed {
    static create (value) {
        if (!whitelist.includes(value)) value = 'standard';
        const parentNode = super.create()
        parentNode.setAttribute('contenteditable', false)
        parentNode.innerHTML = `<hr class='ql-divider ql-divider-${value}' />`
        return parentNode
    }
}

Divider.blotName = 'divider'
Divider.tagName = 'p'
Divider.whitelist = whitelist;
export default Divider;
