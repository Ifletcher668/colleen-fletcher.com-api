import { ClassAttributor, Scope, StyleAttributor } from 'parchment';

const TiltClass = new ClassAttributor('size', 'ql-size', {
    scope: Scope.INLINE,
    whitelist: ['small', 'large', 'huge'],
  });

  const TiltStyle = new StyleAttributor('transform', 'transform', {
    scope: Scope.INLINE,
    whitelist: ['rotate(1deg)', 'rotate(-1deg)', 'rotate(0deg)'],
  });


Quill.register({
    TiltStyle,
    TiltClass,
});
