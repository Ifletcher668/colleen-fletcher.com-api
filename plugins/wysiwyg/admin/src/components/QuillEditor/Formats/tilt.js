import Quill from 'quill';

const Parchment = Quill.import('parchment')

const TiltAttributor = new Parchment.Attributor.Class('tilt', 'ql-tilt', {
  scope: Parchment.Scope.INLINE,
  whitelist: ['up', 'down']
  });

Quill.register(TiltAttributor);

