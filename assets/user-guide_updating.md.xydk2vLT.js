import{_ as t,c as e,o as s,ae as i}from"./chunks/framework.tuuL-SzM.js";const u=JSON.parse('{"title":"Updating Adminbolt","description":"","frontmatter":{},"headers":[],"relativePath":"user-guide/updating.md","filePath":"user-guide/updating.md"}'),o={name:"user-guide/updating.md"};function n(r,a,d,l,h,p){return s(),e("div",null,a[0]||(a[0]=[i('<h1 id="updating-adminbolt" tabindex="-1">Updating Adminbolt <a class="header-anchor" href="#updating-adminbolt" aria-label="Permalink to &quot;Updating Adminbolt&quot;">​</a></h1><p>Keeping your Adminbolt control panel up to date ensures you have access to the latest features, security patches, and improvements. This guide explains how to update your Adminbolt installation.</p><h2 id="automatic-updates" tabindex="-1">Automatic Updates <a class="header-anchor" href="#automatic-updates" aria-label="Permalink to &quot;Automatic Updates&quot;">​</a></h2><p>Adminbolt includes an automatic update system that makes it easy to keep your control panel current.</p><h3 id="using-the-admin-dashboard" tabindex="-1">Using the Admin Dashboard <a class="header-anchor" href="#using-the-admin-dashboard" aria-label="Permalink to &quot;Using the Admin Dashboard&quot;">​</a></h3><p>The simplest way to update Adminbolt:</p><ol><li>Log in to your <strong>Admin Dashboard</strong></li><li>Go to <strong>System Settings</strong> → <strong>System Updates</strong></li><li>Check for available updates</li><li>Click <strong>Update Now</strong> if a new version is available</li></ol><p>The system will automatically download and install the update, then restart necessary services.</p><h2 id="command-line-updates" tabindex="-1">Command Line Updates <a class="header-anchor" href="#command-line-updates" aria-label="Permalink to &quot;Command Line Updates&quot;">​</a></h2><p>For server administrators who prefer using the command line, Adminbolt provides the <code>bolt-updater</code> tool.</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bolt-updater</span></span></code></pre></div><p>Running this command without options will check for and install the latest version from the stable branch.</p><h3 id="update-options" tabindex="-1">Update Options <a class="header-anchor" href="#update-options" aria-label="Permalink to &quot;Update Options&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td><code>--list-versions</code></td><td>List all available versions</td></tr><tr><td><code>--version=x.y.z</code></td><td>Install a specific version</td></tr><tr><td><code>--branch=NAME</code></td><td>Install from a specific branch (default: stable)</td></tr><tr><td><code>--dry-run</code></td><td>Check what would be updated without making changes</td></tr></tbody></table><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Check available versions:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bolt-updater</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list-versions</span></span></code></pre></div><p>Update to a specific version:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bolt-updater</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version=1.2.3</span></span></code></pre></div><p>Check what would be updated without making changes:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bolt-updater</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dry-run</span></span></code></pre></div><h2 id="after-updating" tabindex="-1">After Updating <a class="header-anchor" href="#after-updating" aria-label="Permalink to &quot;After Updating&quot;">​</a></h2><p>After completing an update:</p><ol><li><strong>Clear your browser cache</strong> to ensure you&#39;re seeing the latest interface</li><li><strong>Check the dashboard</strong> for any migration notices or additional steps</li><li><strong>Test key features</strong> to make sure everything is working as expected</li></ol><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><p>If you encounter issues during the update:</p><ul><li><strong>Check the update logs</strong> at <code>/var/log/adminbolt/update.log</code></li><li>Make sure your server meets the <a href="./../installation.html">system requirements</a></li><li>If problems persist, contact support or check the <a href="https://forum.adminbolt.com" target="_blank" rel="noreferrer">forums</a></li></ul>',28)]))}const g=t(o,[["render",n]]);export{u as __pageData,g as default};
