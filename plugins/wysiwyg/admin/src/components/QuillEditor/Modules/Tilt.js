import Quill from 'quill';
import tilt from '../Formats/tilt';

const Module = Quill.import('core/module')
class TiltToolbar extends Module {
    constructor (quill, options) {
        super(quill, options)
        this.quill = quill
        this.toolbar = quill.getModule('toolbar')
        this.toolbar.addHandler('tilt', this.dividerHandler.bind(this))
    }

    dividerHandler () {
        const getSelection = this.quill.getSelection() || {}
        let selection = getSelection.index || this.quill.getLength()
        const [leaf] = this.quill.getLeaf(selection - 1)
        if (leaf instanceof tilt) {
            this.quill.insertText(selection, '\n', Quill.sources.USER)
            selection++
        }
        this.quill.insertEmbed(selection, 'tilt', this.options, Quill.sources.USER)
        if (getSelection.index === 0) {
            selection++
            this.quill.insertText(selection, '\n', Quill.sources.USER)
        }
    }
}

Quill.register(tilt)
Quill.register('modules/tilt', TiltToolbar)

export default TiltToolbar;
