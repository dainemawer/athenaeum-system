import { styled } from '@stitches/react';

const UIButton = styled('button', {
  // ...base
  variants: {
    variant: {
      primary: {},
      secondary: {}
    }
  }
});

export { UIButton }
