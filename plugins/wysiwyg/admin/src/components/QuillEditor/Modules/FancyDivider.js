import Quill from 'quill';
import fancyDivider from '../Formats/fancyDivider';

const Module = Quill.import('core/module');
class DividerToolbar extends Module {
    constructor(quill, options) {
        super(quill, options);
        this.quill = quill;
        this.toolbar = quill.getModule('toolbar');
        this.toolbar.addHandler('fancyDivider', this.dividerHandler.bind(this));
    }

    dividerHandler(value) {
        let cursorPosition = this.quill.getSelection().index;
        const [leaf] = this.quill.getLeaf(cursorPosition - 1);

        if (leaf instanceof fancyDivider) {
            this.quill.insertText(cursorPosition, '\n', Quill.sources.USER);
            this.quill.setSelection(cursorPosition++);
        }
        this.options.value = value
        this.quill.insertEmbed(
            cursorPosition,
            'fancyDivider',
            this.options,
            Quill.sources.USER,
        );
        if (getSelection.index === 0) {
            this.quill.setSelection(cursorPosition++);
            this.quill.insertText(cursorPosition, '\n', Quill.sources.USER);
        }
    }
}

Quill.register(fancyDivider);
Quill.register('modules/fancyDivider', DividerToolbar);

export default DividerToolbar;
