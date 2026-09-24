'use client';

import React, { useEffect, useState} from 'react';
//import * as React from 'react';

// Declare custom HTML element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'tableau-viz': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          id?: string;
          src?: string;
          toolbar?: string;
          device?: string;
        },
        HTMLElement
      >;
    }
  }
}

export default function TableauDashboard() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if script is already present
    const existingScript = document.querySelector(
      'script[src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"]'
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
      script.type = 'module';
      script.onload = () => setIsScriptLoaded(true);
      document.head.appendChild(script);
    } else {
      setIsScriptLoaded(true);
    }
  }, []);

  return (
    <div className="w-full h-[650px] relative rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
      {!isScriptLoaded ? (
        <div className="flex items-center justify-center h-full text-gray-500 font-medium">
          Loading Analytics Dashboard...
        </div>
      ) : (
        <tableau-viz
          id="tableauViz"
          src="https://public.tableau.com/views/SalesReport_17901328145780/Dashboard1"
          toolbar="bottom"
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
}