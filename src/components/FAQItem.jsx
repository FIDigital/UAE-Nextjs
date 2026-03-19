"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Reusable FAQ Item component based on Contact Page UI/UX.
 * Supports local state for expansion.
 */
const FAQItem = ({ question, answer, isOpen: externalIsOpen, onClick }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isControlled = externalIsOpen !== undefined;
  const isOpen = isControlled ? externalIsOpen : internalIsOpen;
  
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  const handleToggle = () => {
    if (onClick) {
      onClick();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div className="faq-item card reveal" style={{ padding: 0, overflow: "hidden", marginBottom: "0.75rem" }}>
      <button 
        onClick={handleToggle} 
        style={{ 
          width: "100%", 
          background: "none", 
          border: "none", 
          cursor: "pointer", 
          padding: "1.4rem 1.75rem", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          gap: "1rem", 
          textAlign: "left" 
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "0.97rem", color: "var(--text)" }}>{question}</span>
        <div style={{ 
          width: 28, 
          height: 28, 
          borderRadius: "50%", 
          background: isOpen ? "var(--primary)" : "var(--bg-secondary)", 
          border: "1.5px solid var(--border)", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          flexShrink: 0, 
          transition: "background 0.2s" 
        }}>
          <ChevronDown 
            size={14} 
            style={{ 
              color: isOpen ? "white" : "var(--text-muted)", 
              transform: isOpen ? "rotate(180deg)" : "rotate(0)", 
              transition: "transform 0.3s ease" 
            }} 
          />
        </div>
      </button>
      <div 
        style={{ 
          maxHeight: isOpen ? (height + 100) + "px" : 0, 
          overflow: "hidden", 
          transition: "max-height 0.38s cubic-bezier(0.4,0,0.2,1)" 
        }}
      >
        <div 
          ref={contentRef}
          style={{ 
            padding: "0 1.75rem 1.4rem", 
            color: "var(--text-muted)", 
            lineHeight: 1.75, 
            fontSize: "0.93rem" 
          }}
        >
          {answer}
        </div>
      </div>
      <style jsx>{`
        .faq-item:hover {
          border-color: var(--primary) !important;
        }
      `}</style>
    </div>
  );
};

export default FAQItem;
