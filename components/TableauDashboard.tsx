"use client";

import { useEffect, useRef, useState } from "react";

const TABLEAU_SRC =
  "https://public.tableau.com/views/SalesReport_17901328145780/Dashboard1";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "tableau-viz": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          id?: string;
          src?: string;
          width?: string;
          height?: string;
          toolbar?: string;
          "hide-tabs"?: boolean;
        },
        HTMLElement
      >;
    }
  }
}

export default function TableauDashboard() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      if (!document.querySelector('script[data-tableau-embedding="v3"]')) {
        const script = document.createElement("script");
        script.type = "module";
        script.src =
          "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";
        script.dataset.tableauEmbedding = "v3";
        document.head.appendChild(script);

        await new Promise<void>((resolve, reject) => {
          script.addEventListener("load", () => resolve(), { once: true });
          script.addEventListener("error", () => reject(new Error("Tableau API failed to load")), {
            once: true,
          });
        });
      }

      if (cancelled || !hostRef.current) return;

      hostRef.current.innerHTML = "";

      const viz = document.createElement("tableau-viz");
      viz.id = "tableauViz";
      viz.setAttribute("src", TABLEAU_SRC);
      viz.setAttribute("toolbar", "bottom");
      viz.setAttribute("hide-tabs", "");

      hostRef.current.appendChild(viz);
      setReady(true);
    };

    load().catch((error) => {
      console.error(error);
      setReady(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="viz-shell">
      <div
        ref={hostRef}
        className="tableau-frame"
        aria-label="Sales Performance Tableau dashboard"
      />
      {!ready && (
        <div style={{ padding: 24, color: "#64748b", fontSize: 13 }}>
          Loading Tableau dashboard…
        </div>
      )}
    </div>
  );
}