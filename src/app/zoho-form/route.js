export async function GET(request) {
  const initialTheme =
    new URL(request.url).searchParams.get("theme") === "dark" ? "dark" : "light";

  const html = `<!DOCTYPE html>
<html lang="en" data-theme="${initialTheme}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us - FI Digital MEA</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #1D4ED8;
      --primary-hover: #1E40AF;
      --bg: #ffffff;
      --text: #1f2937;
      --text-muted: #6b7280;
      --label: #374151;
      --input-bg: #ffffff;
      --input-border: #d1d5db;
      --input-focus: #1D4ED8;
      --error: #ef4444;
      --radius: 10px;
      --shadow-focus: 0 0 0 4px rgba(29,78,216,0.12);
      --transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
    }

    [data-theme="dark"] {
      --bg: #0f172a;
      --text: #f3f4f6;
      --text-muted: #9ca3af;
      --label: #d1d5db;
      --input-bg: rgba(255,255,255,0.06);
      --input-border: rgba(255,255,255,0.28);
      --input-focus: #3b82f6;
      --shadow-focus: 0 0 0 4px rgba(59,130,246,0.18);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { overflow-x: hidden; background: var(--bg); }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg);
      color: var(--text);
      padding: clamp(12px, 3vw, 28px);
      line-height: 1.5;
      overflow-x: hidden;
    }

    #crmWebToEntityForm { width: 100%; max-width: 860px; margin: 0 auto; }

    /* ── Grid layout ─────────────────────────────────────── */
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(0.75rem, 2vw, 1.25rem);
    }
    .full-width { grid-column: span 2; }

    @media (max-width: 768px) {
      .form-grid { gap: 0.9rem; }
    }

    @media (max-width: 540px) {
      .form-grid { grid-template-columns: 1fr; }
      .full-width { grid-column: span 1; }
    }

    /* ── Field rows ──────────────────────────────────────── */
    .zcwf_row { display: flex; flex-direction: column; gap: 5px; }

    .zcwf_col_lab label {
      font-size: clamp(0.75rem, 1.5vw, 0.85rem);
      font-weight: 600;
      color: var(--label);
      letter-spacing: 0.015em;
    }
    .required { color: var(--error); margin-left: 2px; }

    /* ── Inputs / textareas ──────────────────────────────── */
    .zcwf_col_fld input[type="text"],
    .zcwf_col_fld input[type="email"],
    .zcwf_col_fld textarea,
    .zcwf_col_fld select {
      width: 100%;
      padding: clamp(0.65rem, 1.8vw, 0.85rem) clamp(0.8rem, 2vw, 1.1rem);
      background: var(--input-bg);
      border: 1.5px solid var(--input-border);
      border-radius: var(--radius);
      color: var(--text);
      font-family: 'Plus Jakarta Sans', inherit;
      font-size: clamp(0.9rem, 2vw, 1rem);
      transition: var(--transition);
      outline: none;
      -webkit-appearance: none;
      appearance: none;
    }
    .zcwf_col_fld input::placeholder,
    .zcwf_col_fld textarea::placeholder {
      color: var(--text-muted);
      font-size: 0.9em;
      font-family: 'Plus Jakarta Sans', sans-serif;
      opacity: 0.7;
    }
    .zcwf_col_fld input:focus,
    .zcwf_col_fld textarea:focus,
    .zcwf_col_fld select:focus {
      border-color: var(--input-focus);
      box-shadow: var(--shadow-focus);
      background: var(--bg);
    }
    .zcwf_col_fld textarea { min-height: 120px; resize: vertical; }

    /* ── Hidden fields ───────────────────────────────────── */
    .wfrm_fld_dpNn { display: none !important; }

    /* ── Buttons ─────────────────────────────────────────── */
    .button-row {
      margin-top: clamp(1.25rem, 3vw, 1.75rem);
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    .zcwf_button {
      padding: clamp(0.55rem, 1.5vw, 0.7rem) clamp(1.2rem, 4vw, 2rem);
      border-radius: 100px;
      font-family: inherit;
      font-weight: 700;
      font-size: clamp(0.85rem, 2vw, 0.95rem);
      cursor: pointer;
      transition: var(--transition);
      border: none;
      white-space: nowrap;
    }
    .formsubmit {
      background: linear-gradient(135deg, #0279FF 0%, #00A3F3 100%);
      color: #fff;
      box-shadow: 0 4px 14px rgba(2,121,255,0.35);
      flex: 1 1 auto;
    }
    .formsubmit:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(2,121,255,0.4);
    }
    .formsubmit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
    .btn-reset {
      background: transparent;
      border: 1.5px solid var(--input-border);
      color: var(--text);
    }
    .btn-reset:hover { background: rgba(128,128,128,0.07); }

    @media (max-width: 380px) {
      .button-row { flex-direction: column; }
      .zcwf_button { width: 100%; text-align: center; flex: none; }
    }
  </style>
</head>
<body>
  <div id="crmWebToEntityForm">
    <form
      id="webform3209734000060050024"
      action="https://crm.zoho.com/crm/WebToLeadForm"
      name="WebToLeads3209734000060050024"
      method="POST"
      target="_top"
      onsubmit="javascript:document.charset='UTF-8'; return checkMandatory3209734000060050024()"
      accept-charset="UTF-8">

      <!-- Do not remove this code. -->
      <input type="text" style="display:none;" name="xnQsjsdp" value="994f9ee434c49477078a09888e4d7fafbf48f951396627bba3ed15ccc50af99a">
      <input type="hidden" name="zc_gad" id="zc_gad" value="">
      <input type="text" style="display:none;" name="xmIwtLD" value="f3ddb8a3a83d1bfdf3aa0f108d5f8b25e1d9817d3845d57aa5f18439b76297c8f84ed3d96de782a316ef54336f1f57f8">
      <input type="text" style="display:none;" name="actionType" value="TGVhZHM=">
      <input type="text" style="display:none;" name="returnURL" value="https://www.fidigital.ae/thank-you">
      <!-- Do not remove this code. -->
      <input type="text" style="display:none;" id="ldeskuid" name="ldeskuid">
      <input type="text" style="display:none;" id="LDTuvid" name="LDTuvid">
      <!-- Do not remove this code. -->

      <div class="form-grid">

        <!-- First Name -->
        <div class="zcwf_row">
          <div class="zcwf_col_lab">
            <label for="First_Name">First Name <span class="required">*</span></label>
          </div>
          <div class="zcwf_col_fld">
            <input type="text" id="First_Name" name="First Name" placeholder="e.g. Ahmed"
              aria-required="true" maxlength="40">
          </div>
        </div>

        <!-- Last Name -->
        <div class="zcwf_row">
          <div class="zcwf_col_lab">
            <label for="Last_Name">Last Name <span class="required">*</span></label>
          </div>
          <div class="zcwf_col_fld">
            <input type="text" id="Last_Name" name="Last Name" placeholder="e.g. Al Mansouri"
              aria-required="true" maxlength="80">
          </div>
        </div>

        <!-- Email -->
        <div class="zcwf_row">
          <div class="zcwf_col_lab">
            <label for="Email">Email <span class="required">*</span></label>
          </div>
          <div class="zcwf_col_fld">
            <input type="text" ftype="email" autocomplete="false" id="Email" name="Email"
              placeholder="ahmed@example.com" aria-required="true" maxlength="100">
          </div>
        </div>

        <!-- Mobile -->
        <div class="zcwf_row">
          <div class="zcwf_col_lab">
            <label for="Mobile">Mobile</label>
          </div>
          <div class="zcwf_col_fld">
            <input type="text" id="Mobile" name="Mobile" placeholder="e.g. +971 50 000 0000"
              maxlength="30">
          </div>
        </div>

        <!-- Company -->
        <div class="zcwf_row">
          <div class="zcwf_col_lab">
            <label for="Company">Company <span class="required">*</span></label>
          </div>
          <div class="zcwf_col_fld">
            <input type="text" id="Company" name="Company" placeholder="Your Company Name"
              aria-required="true" maxlength="200">
          </div>
        </div>

        <!-- Company Size -->
        <div class="zcwf_row">
          <div class="zcwf_col_lab">
            <label for="LEADCF55">Company Size</label>
          </div>
          <div class="zcwf_col_fld">
            <select id="LEADCF55" name="LEADCF55"
              style="-webkit-appearance:menulist; appearance:menulist;"
              onchange="addAriaSelected3209734000060050024()">
              <option value="-None-">Select\u2026</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="501+">501+</option>
            </select>
          </div>
        </div>

        <!-- Pain Points -->
        <div class="zcwf_row full-width">
          <div class="zcwf_col_lab">
            <label for="LEADCF130">What are your main pain points?</label>
          </div>
          <div class="zcwf_col_fld">
            <textarea id="LEADCF130" name="LEADCF130" placeholder="Describe your challenges\u2026"></textarea>
          </div>
        </div>

      </div><!-- /.form-grid -->

      <!-- Hidden: Source URL (Do not remove) -->
      <div class="zcwf_row wfrm_fld_dpNn">
        <div class="zcwf_col_fld">
          <input type="text" id="LEADCF129" name="LEADCF129" maxlength="450" value="https://www.fidigital.ae/contact">
        </div>
      </div>

      <!-- Hidden: Business Entity (Do not remove) -->
      <div class="zcwf_row wfrm_fld_dpNn">
        <div class="zcwf_col_lab"><label for="LEADCF48">Business Entity</label></div>
        <div class="zcwf_col_fld">
          <select class="zcwf_col_fld_slt" id="LEADCF48"
            onchange="addAriaSelected3209734000060050024()" name="LEADCF48">
            <option value="-None-">-None-</option>
            <option value="Fristine Infotech">Fristine Infotech</option>
            <option value="FI Digital">FI Digital</option>
            <option value="DSV Corp">DSV Corp</option>
            <option selected value="FI Digital MEA">FI Digital MEA</option>
            <option value="FI Digital UK">FI Digital UK</option>
            <option value="FI Digital US">FI Digital US</option>
            <option value="FI Digital NZ">FI Digital NZ</option>
          </select>
        </div>
      </div>

      <!-- Hidden: Lead Status (Do not remove) -->
      <div class="zcwf_row wfrm_fld_dpNn">
        <div class="zcwf_col_lab"><label for="Lead_Status">Lead Status</label></div>
        <div class="zcwf_col_fld">
          <select class="zcwf_col_fld_slt" id="Lead_Status"
            onchange="addAriaSelected3209734000060050024()" name="Lead Status">
            <option value="-None-">-None-</option>
            <option value="Not Contacted">Not Contacted</option>
            <option selected value="New Lead">New Lead</option>
          </select>
        </div>
      </div>

      <input type="hidden" name="aG9uZXlwb3Q" value="">

      <div class="button-row">
        <input type="submit" id="formsubmit" role="button"
          class="zcwf_button formsubmit" value="Request Free Audit" aria-label="Submit">
        <input type="reset" class="zcwf_button btn-reset" role="button"
          name="reset" value="Reset" aria-label="Reset">
      </div>

      <!-- Do not remove this code. -->
      <script>
        function addAriaSelected3209734000060050024() {
          var optionElem = event.target;
          var prev = optionElem.querySelector('[aria-selected=true]');
          if (prev) prev.removeAttribute('aria-selected');
          optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
        }

        function historyBack3209734000060050024() {
          document.querySelector('.crmWebToEntityForm .formsubmit') &&
            document.querySelector('.crmWebToEntityForm .formsubmit').removeAttribute('disabled');
          document.getElementById('formsubmit').removeAttribute('disabled');
          window.removeEventListener('focus', historyBack3209734000060050024);
        }

        function validateEmail3209734000060050024() {
          var form = document.forms['WebToLeads3209734000060050024'];
          var emailFld = form.querySelectorAll('[ftype=email]');
          for (var i = 0; i < emailFld.length; i++) {
            var emailVal = emailFld[i].value.trim();
            if (emailVal.length !== 0) {
              var atpos = emailVal.indexOf('@');
              var dotpos = emailVal.lastIndexOf('.');
              if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                alert('Please enter a valid email address.');
                emailFld[i].focus();
                return false;
              }
            }
          }
          return true;
        }

        function checkMandatory3209734000060050024() {
          var mndFileds = ['Company', 'First Name', 'Last Name', 'Email'];
          var fldLangVal = ['Company', 'First Name', 'Last Name', 'Email'];
          var form = document.forms['WebToLeads3209734000060050024'];
          for (var i = 0; i < mndFileds.length; i++) {
            var fieldObj = form[mndFileds[i]];
            if (fieldObj) {
              if (fieldObj.value.replace(/^\\s+|\\s+$/g, '').length === 0) {
                if (fieldObj.type === 'file') { alert('Please select a file to upload.'); fieldObj.focus(); return false; }
                alert(fldLangVal[i] + ' cannot be empty.');
                fieldObj.focus();
                return false;
              } else if (fieldObj.nodeName === 'SELECT') {
                if (fieldObj.options[fieldObj.selectedIndex].value === '-None-') {
                  alert(fldLangVal[i] + ' cannot be none.');
                  fieldObj.focus();
                  return false;
                }
              } else if (fieldObj.type === 'checkbox') {
                if (!fieldObj.checked) { alert('Please accept ' + fldLangVal[i]); fieldObj.focus(); return false; }
              }
            }
          }
          trackVisitor3209734000060050024();
          if (!validateEmail3209734000060050024()) return false;
          document.getElementById('formsubmit').setAttribute('disabled', true);
          window.addEventListener('focus', historyBack3209734000060050024);
        }

        function tooltipShow3209734000060050024(el) {
          var tooltip = el.nextElementSibling;
          if (tooltip.style.display === 'none' || tooltip.style.display === '') {
            tooltip.style.display = 'block';
          } else {
            tooltip.style.display = 'none';
          }
        }
      </script>

      <!-- SalesIQ tracking -->
      <script>
        function trackVisitor3209734000060050024() {
          try {
            if (typeof $zoho !== 'undefined' && $zoho.salesiq) {
              var LDTuvidObj = document.forms['WebToLeads3209734000060050024']['LDTuvid'];
              if (LDTuvidObj) { LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid(); }

              var firstName = document.forms['WebToLeads3209734000060050024']['First Name'].value;
              var lastName = document.forms['WebToLeads3209734000060050024']['Last Name'].value;
              var fullName = (firstName + ' ' + lastName).trim();

              if (fullName) { $zoho.salesiq.visitor.name(fullName); }

              var emailObj = document.forms['WebToLeads3209734000060050024']['Email'];
              if (emailObj && emailObj.value) { $zoho.salesiq.visitor.email(emailObj.value); }
            }
          } catch(e) {}
        }
      </script>

      <!-- Do not remove this --- Analytics Tracking code starts -->
      <script id="wf_anal" src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=92a33bb771d2479e036c71f2721a5335a0f98127afa48b4feefe944184bdcded72775938288b64c36c6b7cd1b475a212gid42e72f676303887d03f533b4b41291919fffd979fc351a567483fcb80705399bgid4e0a253589b981678b2726f8a2fc5e0066dbb8e1dc27c8fb578bb665b6ccc1c3gidf06d39adce95a12fa4ef51cd6fc3467f344109a2ea26c11ace26bb299692f186&tw=4dada920d571126a8a4175091c1e075d2814e3ef407672fead4cd55049f72461"></script>
      <!-- Do not remove this --- Analytics Tracking code ends. -->

    </form>
    <!-- Do not remove this code. -->
  </div>

  <!-- Theme Detection + Auto-height reporting -->
  <script>
    (function() {
      function applyTheme(isDark) {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      }
      window.addEventListener('message', function(e) {
        if (e.data && e.data.type === 'theme') { applyTheme(e.data.isDark); }
      });

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
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
