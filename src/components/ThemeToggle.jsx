"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div style={{ width: "42px", height: "42px" }} />;

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="theme-switch-btn"
            aria-label="Toggle Theme"
            style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
        >
            <div className="switch-icon-container">
                {/* Sun Icon */}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`sun-icon ${isDark ? "inactive" : "active"}`}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) ${isDark ? "scale(0) rotate(-90deg)" : "scale(1) rotate(0)"}`,
                        opacity: isDark ? 0 : 1,
                        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        color: "#F59E0B",
                    }}
                >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>

                {/* Moon Icon */}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`moon-icon ${isDark ? "active" : "inactive"}`}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) ${isDark ? "scale(1) rotate(0)" : "scale(0) rotate(90deg)"}`,
                        opacity: isDark ? 1 : 0,
                        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        color: "#6366F1",
                    }}
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            </div>

            <style jsx>{`
        .theme-switch-btn {
          background: var(--bg-secondary);
          box-shadow: 0 0 0 1px var(--border);
        }
        .theme-switch-btn:hover {
          background: var(--hover-bg);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .switch-icon-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
      `}</style>
        </button>
    );
}
