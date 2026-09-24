import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'tableau-viz': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src: string;
          id?: string;
          token?: string;
          toolbar?: 'hidden' | 'visible';
          // Add any other Tableau attributes you plan to use
        },
        HTMLElement
      >;
    }
  }
}