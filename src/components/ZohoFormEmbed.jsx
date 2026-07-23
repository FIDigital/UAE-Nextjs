"use client";

import { useState, useRef, useEffect } from "react";

/**
 * Embeds the Zoho Web-to-Lead form (served at /zoho-form) in an auto-sizing iframe.
 *
 * - src points at the /zoho-form route handler.
 * - Auto-height: the form posts {type:'iframeHeight'} on load/resize; we grow the
 *   iframe to match so there's no inner scrollbar (scrolling="no").
 * - Theme sync: pushes light/dark into the iframe so the form matches the site.
 */
const isSiteDark = () =>
  typeof document !== "undefined" &&
  (document.documentElement.getAttribute("data-theme") === "dark" ||
    document.documentElement.classList.contains("dark"));

export default function ZohoFormEmbed({ title = "Contact Us Form", fallbackHeight = "850px" }) {
  const [height, setHeight] = useState(fallbackHeight);
  const [src, setSrc] = useState(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    setSrc(`/zoho-form?theme=${isSiteDark() ? "dark" : "light"}`);
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === "iframeHeight") {
        setHeight(`${event.data.height}px`);
      }
    };
    window.addEventListener("message", handleMessage);

    const pushTheme = () => {
      const win = iframeRef.current && iframeRef.current.contentWindow;
      if (!win) return;
      try {
        win.postMessage({ type: "theme", isDark: isSiteDark() }, "*");
      } catch (e) {}
    };

    const timer = setTimeout(pushTheme, 300);

    const observer = new MutationObserver(pushTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ width: "100%", minHeight: height, transition: "min-height 0.3s ease" }}>
      {src && (
        <iframe
          ref={iframeRef}
          src={src}
          title={title}
          scrolling="no"
          style={{ width: "100%", height: height, border: "none", display: "block" }}
          onLoad={(e) => {
            try {
              e.target.contentWindow.postMessage(
                { type: "theme", isDark: isSiteDark() },
                "*"
              );
            } catch (err) {}
          }}
        />
      )}
    </div>
  );
}
