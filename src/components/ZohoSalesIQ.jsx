"use client";

import Script from "next/script";

export default function ZohoSalesIQ() {
  return (
    <>
      <Script id="zoho-init" strategy="afterInteractive">
        {`window.$zoho = window.$zoho || {}; $zoho.salesiq = $zoho.salesiq || { ready: function () { } }`}
      </Script>
      <Script
        id="zsiqscript"
        src="https://salesiq.zohopublic.com/widget?wc=siqd5554e2b4cb32464c280697bfa50a51cc07229c8920b4b9dc4247500c1733a43"
        strategy="afterInteractive"
      />
    </>
  );
}
