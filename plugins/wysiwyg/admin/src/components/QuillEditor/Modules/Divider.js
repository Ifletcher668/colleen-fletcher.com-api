import Quill from 'quill';
import divider from '../Formats/divider';

const Module = Quill.import('core/module');
class DividerToolbar extends Module {
    constructor(quill, options) {
        super(quill, options);
        this.quill = quill;
        this.toolbar = quill.getModule('toolbar');
        this.toolbar.addHandler('divider', this.dividerHandler.bind(this));
    }

    dividerHandler(value) {
        let cursorPosition = this.quill.getSelection().index;
        const [leaf] = this.quill.getLeaf(cursorPosition - 1);

        if (leaf instanceof divider) {
            this.quill.insertText(cursorPosition, '\n', Quill.sources.USER);
            this.quill.setSelection(cursorPosition++);
        }
        this.options.value = value
        this.quill.insertEmbed(
            cursorPosition,
            'divider',
            this.options,
            Quill.sources.USER,
        );
        if (getSelection.index === 0) {
            this.quill.insertText(cursorPosition, '\n', Quill.sources.USER);
            this.quill.setSelection(cursorPosition++);
        }
    }
}

Quill.register(divider);
Quill.register('modules/divider', DividerToolbar);

export default DividerToolbar;
