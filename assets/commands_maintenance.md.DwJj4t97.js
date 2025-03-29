import{_ as a,c as i,o as t,ag as n}from"./chunks/framework.Ds6Eueu6.js";const p=JSON.parse('{"title":"System Maintenance Guide","description":"","frontmatter":{},"headers":[{"level":3,"title":"System Repair","slug":"system-repair","link":"#system-repair","children":[]},{"level":3,"title":"Domain Configuration Repair","slug":"domain-configuration-repair","link":"#domain-configuration-repair","children":[]},{"level":3,"title":"Domain Health Check","slug":"domain-health-check","link":"#domain-health-check","children":[]}],"relativePath":"commands/maintenance.md","filePath":"commands/maintenance.md"}'),s={name:"commands/maintenance.md"};function o(l,e,r,d,c,m){return t(),i("div",null,e[0]||(e[0]=[n('<h1 id="system-maintenance-guide" tabindex="-1">System Maintenance Guide <a class="header-anchor" href="#system-maintenance-guide" aria-label="Permalink to &quot;System Maintenance Guide&quot;">​</a></h1><p>This guide covers the maintenance and management commands available in the Adminbolt system. These commands help you maintain system health and manage web services.</p><h2 id="system-maintenance-commands" tabindex="-1">System Maintenance Commands <a class="header-anchor" href="#system-maintenance-commands" aria-label="Permalink to &quot;System Maintenance Commands&quot;">​</a></h2><h3 id="system-repair" tabindex="-1">System Repair <a class="header-anchor" href="#system-repair" aria-label="Permalink to &quot;System Repair&quot;">​</a></h3><p>Use this command to perform automated system repairs and maintenance tasks.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bolt-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run-repair</span></span></code></pre></div><p><strong>What it does:</strong></p><ul><li>Scans for system inconsistencies</li><li>Repairs configuration files</li><li>Optimizes system performance</li><li>Cleans up temporary files</li><li>Validates system integrity</li></ul><blockquote><p><strong>Note:</strong> It&#39;s recommended to run this command during off-peak hours.</p></blockquote><h2 id="domain-management-commands" tabindex="-1">Domain Management Commands <a class="header-anchor" href="#domain-management-commands" aria-label="Permalink to &quot;Domain Management Commands&quot;">​</a></h2><h3 id="domain-configuration-repair" tabindex="-1">Domain Configuration Repair <a class="header-anchor" href="#domain-configuration-repair" aria-label="Permalink to &quot;Domain Configuration Repair&quot;">​</a></h3><p>Fixes issues with domain configurations and ensures proper setup.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bolt-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run-domain-repair</span></span></code></pre></div><p><strong>Features:</strong></p><ul><li>Validates domain configurations</li><li>Fixes SSL certificate issues</li><li>Repairs DNS settings</li><li>Corrects virtual host configurations</li><li>Ensures proper domain routing</li></ul><blockquote><p><strong>Warning:</strong> Back up your domain configurations before running this command.</p></blockquote><h3 id="domain-health-check" tabindex="-1">Domain Health Check <a class="header-anchor" href="#domain-health-check" aria-label="Permalink to &quot;Domain Health Check&quot;">​</a></h3><p>Monitors and verifies domain connectivity and health.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bolt-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ping-domains</span></span></code></pre></div><p><strong>Capabilities:</strong></p><ul><li>Checks domain response times</li><li>Verifies DNS resolution</li><li>Tests SSL certificate validity</li><li>Monitors HTTP/HTTPS accessibility</li><li>Reports domain health status</li></ul><h2 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h2><ol><li><p><strong>Regular Maintenance</strong></p><ul><li>Run <code>bolt-cli run-repair</code> weekly</li><li>Schedule maintenance during low-traffic periods</li><li>Monitor system logs after maintenance</li></ul></li><li><p><strong>Domain Management</strong></p><ul><li>Regularly check domain health with <code>bolt-cli ping-domains</code></li><li>Address issues promptly when detected</li><li>Keep domain configurations backed up</li></ul></li><li><p><strong>Troubleshooting</strong> If you encounter issues:</p><ol><li>Check system logs</li><li>Run <code>bolt-cli run-repair</code></li><li>Verify domain health with <code>bolt-cli ping-domains</code></li><li>Run <code>bolt-cli run-domain-repair</code> if domain issues persist</li></ol></li></ol><h2 id="command-quick-reference" tabindex="-1">Command Quick Reference <a class="header-anchor" href="#command-quick-reference" aria-label="Permalink to &quot;Command Quick Reference&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Command</th><th>Purpose</th><th>Frequency</th></tr></thead><tbody><tr><td><code>bolt-cli run-repair</code></td><td>System-wide maintenance and repairs</td><td>Weekly</td></tr><tr><td><code>bolt-cli run-domain-repair</code></td><td>Fix domain configuration issues</td><td>As needed</td></tr><tr><td><code>bolt-cli ping-domains</code></td><td>Check domain health status</td><td>Daily</td></tr></tbody></table><blockquote><p><strong>Note:</strong> Always monitor system performance after running maintenance commands.</p></blockquote><h2 id="additional-resources" tabindex="-1">Additional Resources <a class="header-anchor" href="#additional-resources" aria-label="Permalink to &quot;Additional Resources&quot;">​</a></h2><ul><li><a href="./monitoring.html">System Monitoring Guide</a></li><li><a href="./troubleshooting.html">Troubleshooting Guide</a></li><li><a href="./domain-management.html">Domain Management Guide</a></li></ul><h2 id="support" tabindex="-1">Support <a class="header-anchor" href="#support" aria-label="Permalink to &quot;Support&quot;">​</a></h2><p>If you encounter issues that cannot be resolved using these commands, please contact our support team:</p><ul><li>Email: <a href="mailto:support@adminbolt.com" target="_blank" rel="noreferrer">support@adminbolt.com</a></li><li>Support Portal: <a href="https://support.adminbolt.com" target="_blank" rel="noreferrer">https://support.adminbolt.com</a></li></ul>',31)]))}const u=a(s,[["render",o]]);export{p as __pageData,u as default};
