import Quill from 'quill';
import divider from '../Formats/divider';

const Module = Quill.import('core/module')
class DividerToolbar extends Module {
    constructor (quill, options) {
        super(quill, options)
        this.quill = quill
        this.toolbar = quill.getModule('toolbar')
        this.toolbar.addHandler('divider', this.dividerHandler.bind(this))
    }

    dividerHandler () {
        const getSelection = this.quill.getSelection() || {}
        let selection = getSelection.index || this.quill.getLength()
        const [leaf] = this.quill.getLeaf(selection - 1)
        if (leaf instanceof divider) {
            this.quill.insertText(selection, '\n', Quill.sources.USER)
            selection++
        }
        this.quill.insertEmbed(selection, 'divider', this.options, Quill.sources.USER)
        if (getSelection.index === 0) {
            selection++
            this.quill.insertText(selection, '\n', Quill.sources.USER)
        }
    }
}

Quill.register(divider)
Quill.register('modules/divider', DividerToolbar)

export default DividerToolbar;
