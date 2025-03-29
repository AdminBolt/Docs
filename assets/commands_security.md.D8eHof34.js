import{_ as e,c as s,o as i,ae as t}from"./chunks/framework.tuuL-SzM.js";const u=JSON.parse('{"title":"Security Commands","description":"","frontmatter":{},"headers":[],"relativePath":"commands/security.md","filePath":"commands/security.md"}'),l={name:"commands/security.md"};function o(n,a,h,r,c,p){return i(),s("div",null,a[0]||(a[0]=[t('<h1 id="security-commands" tabindex="-1">Security Commands <a class="header-anchor" href="#security-commands" aria-label="Permalink to &quot;Security Commands&quot;">​</a></h1><p>These commands help you manage security features, SSL certificates, and related services in the Adminbolt system.</p><h2 id="bolt-run-auto-ssl" tabindex="-1"><code>bolt:run-auto-ssl</code> <a class="header-anchor" href="#bolt-run-auto-ssl" aria-label="Permalink to &quot;`bolt:run-auto-ssl`&quot;">​</a></h2><p>Runs the automatic SSL certificate issuance and renewal process for domains.</p><h3 id="options" tabindex="-1">Options: <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options:&quot;">​</a></h3><ul><li><code>--domain</code>: Specify a particular domain to process</li><li><code>--format</code>: Output format</li></ul><h3 id="example" tabindex="-1">Example: <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example:&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bolt:run-auto-ssl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --domain=example.com</span></span></code></pre></div><h2 id="bolt-ssl-health-check" tabindex="-1"><code>bolt:ssl-health-check</code> <a class="header-anchor" href="#bolt-ssl-health-check" aria-label="Permalink to &quot;`bolt:ssl-health-check`&quot;">​</a></h2><p>Checks the health and validity of SSL certificates.</p><h3 id="example-1" tabindex="-1">Example: <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example:&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bolt:ssl-health-check</span></span></code></pre></div><h2 id="bolt-run-security-scan" tabindex="-1"><code>bolt:run-security-scan</code> <a class="header-anchor" href="#bolt-run-security-scan" aria-label="Permalink to &quot;`bolt:run-security-scan`&quot;">​</a></h2><p>Runs a comprehensive security scan on the system.</p><h3 id="example-2" tabindex="-1">Example: <a class="header-anchor" href="#example-2" aria-label="Permalink to &quot;Example:&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bolt:run-security-scan</span></span></code></pre></div><h2 id="bolt-firewall" tabindex="-1"><code>bolt:firewall</code> <a class="header-anchor" href="#bolt-firewall" aria-label="Permalink to &quot;`bolt:firewall`&quot;">​</a></h2><p>Manages firewall rules, allowing you to control port access and security zones.</p><h3 id="options-1" tabindex="-1">Options: <a class="header-anchor" href="#options-1" aria-label="Permalink to &quot;Options:&quot;">​</a></h3><ul><li><code>--action</code>: The action to perform (allow, deny, delete)</li><li><code>--port</code>: The port number to configure</li><li><code>--zone</code>: The firewall zone to apply the rule to (defaults to &#39;public&#39;)</li></ul><h3 id="example-3" tabindex="-1">Example: <a class="header-anchor" href="#example-3" aria-label="Permalink to &quot;Example:&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bolt:firewall</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --action=allow</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --port=80</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --zone=public</span></span></code></pre></div><p>This command lets you manage firewall rules by allowing, denying, or deleting port access rules in specified zones.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div>',24)]))}const m=e(l,[["render",o]]);export{u as __pageData,m as default};
