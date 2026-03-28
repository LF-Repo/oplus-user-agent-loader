export default {
  async fetch(request) {
    const url = new URL(request.url);
    const targetPath = url.pathname + url.search;

    if (targetPath === '/' || targetPath === '') {
      return new Response(HTML_CONTENT, {
        headers: { 'Content-Type': 'text/html;charset=utf-8' }
      });
    }

    let targetUrl = targetPath.startsWith('/') ? targetPath.slice(1) : targetPath;

    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      return new Response('Invalid URL. Please provide a full URL starting with http:// or https://', { status: 400 });
    }

    const headers = new Headers({
      'User-Agent': 'Linux; U; Android 14; PJE110 Build/TP1A.220905.001',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    });

    try {
      const response = await fetch(targetUrl, {
        method: 'GET',
        headers,
        redirect: 'follow',
      });
      const responseHeaders = new Headers(response.headers);
      responseHeaders.set('Access-Control-Allow-Origin', '*');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      });
    } catch (error) {
      return new Response(`Error fetching target: ${error.message}`, { status: 500 });
    }
  }
};

const HTML_CONTENT = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>Oplus User Agent Loader</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            background: #F5F5F5;
            font-family: 'Roboto', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 24px;
        }
        .card {
            background: #FFFFFF;
            border-radius: 28px;
            box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.12), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.20);
            max-width: 560px;
            width: 100%;
            padding: 32px 24px 24px 24px;
            transition: box-shadow 0.2s;
        }
        .card:hover {
            box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.12), 0px 2px 4px 0px rgba(0,0,0,0.08);
        }
        .title {
            font-size: 28px;
            font-weight: 500;
            letter-spacing: -0.25px;
            color: #1C1B1F;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .title .material-symbols-outlined {
            font-size: 32px;
            color: #6750A4;
        }
        .subtitle {
            font-size: 14px;
            font-weight: 400;
            color: #49454F;
            margin-bottom: 32px;
            line-height: 1.4;
        }
        .input-field {
            margin-bottom: 28px;
        }
        .input-field label {
            display: block;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0.5px;
            color: #6750A4;
            margin-bottom: 6px;
        }
        .input-wrapper {
            position: relative;
            width: 100%;
        }
        .input-wrapper input {
            width: 100%;
            padding: 16px 16px 8px 16px;
            font-size: 16px;
            font-family: 'Roboto', monospace;
            border: 2px solid #CAC4D0;
            border-radius: 16px;
            outline: none;
            background: #FEF7FF;
            transition: border-color 0.2s ease;
            color: #1C1B1F;
        }
        .input-wrapper input:focus {
            border-color: #6750A4;
        }
        .input-wrapper input::placeholder {
            color: #CAC4D0;
            font-weight: 400;
        }
        .btn {
            background: #6750A4;
            border: none;
            border-radius: 40px;
            padding: 12px 24px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.1px;
            color: white;
            cursor: pointer;
            transition: all 0.2s;
            width: 100%;
            box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.3);
        }
        .btn:hover {
            background: #4F378B;
            box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
        }
        .btn:active {
            background: #381E72;
            box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.2);
        }
        .btn .material-symbols-outlined {
            font-size: 18px;
        }
        .helper {
            font-size: 12px;
            color: #6750A4;
            margin-top: 8px;
            text-align: center;
        }
        .error-helper {
            color: #B3261E;
            margin-top: 8px;
            font-size: 12px;
            text-align: center;
        }
        hr {
            margin: 24px 0 12px;
            border: none;
            border-top: 1px solid #E8DEF8;
        }
        .footer-note {
            font-size: 11px;
            color: #79747E;
            text-align: center;
            margin-top: 16px;
        }
        @media (max-width: 600px) {
            .card {
                padding: 24px 20px;
            }
            .title {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
<div class="card">
    <div class="title">
        <span class="material-symbols-outlined">download</span>
        Oplus User Agent Loader
    </div>
    <div class="subtitle">
        Download files with Android 14 UA
    </div>

    <div class="input-field">
        <label>URL</label>
        <div class="input-wrapper">
            <input type="text" id="fileUrl" placeholder="https://example.com/file.zip" autocomplete="off">
        </div>
        <div id="helperText" class="helper">Enter a file URL</div>
    </div>

    <button id="downloadBtn" class="btn">
        <span class="material-symbols-outlined">cloud_download</span>
        DOWNLOAD
    </button>

    <hr>
    <div class="footer-note">
        Powered by Cloudflare Workers
    </div>
</div>

<script>
    (function() {
        const inputEl = document.getElementById('fileUrl');
        const btn = document.getElementById('downloadBtn');
        const helperEl = document.getElementById('helperText');

        function normalizeUrl(raw) {
            let url = raw.trim();
            if (!url) return null;
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }
            try {
                new URL(url);
                return url;
            } catch(e) {
                return null;
            }
        }

        function showError(msg) {
            helperEl.className = 'error-helper';
            helperEl.textContent = msg;
        }

        function showHelper(msg, isError = false) {
            helperEl.className = isError ? 'error-helper' : 'helper';
            helperEl.textContent = msg;
        }

        function resetHelper() {
            helperEl.className = 'helper';
            helperEl.textContent = 'Enter a file URL';
        }

        btn.addEventListener('click', () => {
            const rawInput = inputEl.value;
            if (!rawInput.trim()) {
                showError('Please enter a file URL');
                return;
            }

            const normalized = normalizeUrl(rawInput);
            if (!normalized) {
                showError('Invalid URL');
                return;
            }

            const fullDownloadUrl = window.location.origin + '/' + normalized;
            const newTab = window.open(fullDownloadUrl, '_blank');
            if (!newTab) {
                showError('Pop-up blocked', true);
                setTimeout(resetHelper, 3000);
            } else {
                showHelper('Download started', false);
                setTimeout(resetHelper, 3000);
            }
        });

        inputEl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                btn.click();
            }
        });
    })();
</script>
</body>
</html>`;
