import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'tableau-viz': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        // Add any custom attributes the tableau-viz element accepts here, for example:
        'src'?: string;
        'height'?: string;
        'width'?: string;
        'toolbar'?: 'top' | 'bottom' | 'hidden';
      };
    }
  }
}