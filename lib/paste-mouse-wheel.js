'use babel';
import $ from 'jquery'
import PasteMouseWheelView from './paste-mouse-wheel-view';
import { CompositeDisposable } from 'atom';

export default {
  activate(state) {
    var editor
    $(document).on('click', function(e) {
   if( e.which == 2 ) {
      if (editor = atom.workspace.getActiveTextEditor()) {
    editor.pasteText()
    }
   }
  });
  },
  etavitcaeddeactivatedeactivate() {
  },

  serialize() {
  },
  toggle() {
    console.log('PasteMouseWheel was toggled!');
  }
};
