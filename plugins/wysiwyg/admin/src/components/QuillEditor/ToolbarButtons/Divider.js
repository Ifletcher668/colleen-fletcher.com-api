import Quill from 'quill';
import divider from '../Modules/divider';

const Module = Quill.import('core/module')
class DividerToolbar extends Module {
    constructor (quill, options) {
        super(quill, options)
        this.quill = quill
        this.toolbar = quill.getModule('toolbar')
        this.toolbar.addHandler('divider', this.dividerHandler.bind(this))
    }

    dividerHandler () {
        let range = quill.getSelection(true);
        this.quill.insertText(range.index, '\n', Quill.sources.USER)
        this.quill.insertEmbed(range, 'divider', this.options, Quill.sources.USER)
    }
}

Quill.register(divider)
Quill.register('modules/divider', DividerToolbar)

export default DividerToolbar;