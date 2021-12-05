import Quill from 'quill'

const BlockEmbed = Quill.import('blots/block/embed')

class Divider extends BlockEmbed {
    static create (config) {
        const parentNode = super.create()
        parentNode.setAttribute('contenteditable', false)
        parentNode.innerHTML = `<hr style="${config.cssText}">`
        return parentNode
    }
}

Divider.blotName = 'divider'
Divider.tagName = 'hr'
Divider.className = 'quill-hr'
export default Divider;