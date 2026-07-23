export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - FI Digital MEA</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #ffffff; --text: #1f2937; --text-muted: #6b7280; --primary: #1D4ED8;
      --card-border: #e5e7eb; --success-bg: rgba(16,185,129,0.1); --success: #10B981;
    }
    [data-theme="dark"] {
      --bg: transparent; --text: #f3f4f6; --text-muted: #9ca3af; --primary: #3b82f6;
      --card-border: rgba(255,255,255,0.14); --success-bg: rgba(16,185,129,0.18);
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { overflow-x: hidden; }
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg); color: var(--text);
      padding: clamp(24px, 6vw, 56px); line-height: 1.6;
      display: flex; align-items: center; justify-content: center; min-height: 320px;
    }
    .ty-card {
      max-width: 480px; width: 100%; text-align: center;
      border: 1px solid var(--card-border); border-radius: 16px;
      padding: clamp(28px, 5vw, 44px) clamp(20px, 4vw, 36px);
    }
    .ty-icon {
      width: 64px; height: 64px; border-radius: 50%;
      background: var(--success-bg); color: var(--success);
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 1.5rem;
    }
    .ty-title { font-size: clamp(1.4rem, 4vw, 1.75rem); font-weight: 800; margin-bottom: 0.75rem; }
    .ty-text { font-size: 1rem; color: var(--text-muted); }
    .ty-text a { color: var(--primary); font-weight: 600; text-decoration: none; }
  </style>
</head>
<body>
  <div class="ty-card">
    <div class="ty-icon">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6 9 17l-5-5"/>
      </svg>
    </div>
    <h1 class="ty-title">Thank you — your inquiry has been received.</h1>
    <p class="ty-text">A member of our team will respond within 4 business hours. If it's urgent, email us at <a href="mailto:support@fidigital.ae">support@fidigital.ae</a>.</p>
  </div>

  <!-- Theme detection + auto-height reporting -->
  <script>
    (function() {
      function applyTheme(isDark) {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      }
      window.addEventListener('message', function(e) {
        if (e.data && e.data.type === 'theme') { applyTheme(e.data.isDark); }
      });
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      applyTheme(mq.matches);
      mq.addEventListener('change', function(e) { applyTheme(e.matches); });

      function reportHeight() {
        var h = document.documentElement.scrollHeight || document.body.scrollHeight;
        window.parent.postMessage({ type: 'iframeHeight', height: h }, '*');
      }
      window.addEventListener('load', reportHeight);
      window.addEventListener('resize', reportHeight);
      var ro = new ResizeObserver(reportHeight);
      ro.observe(document.body);
    })();
  </script>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}
