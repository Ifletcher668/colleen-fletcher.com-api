import Quill from 'quill';

const BlockEmbed = Quill.import('blots/block/embed')

class Divider extends BlockEmbed {
    static create (config) {
        const parentNode = super.create()
        parentNode.setAttribute('contenteditable', false)
        parentNode.innerHTML = `<hr class="${config.option}">`
        return parentNode
    }
}

Divider.blotName = 'divider'
Divider.tagName = 'p'
Divider.className = 'ql-divider'
export default Divider;