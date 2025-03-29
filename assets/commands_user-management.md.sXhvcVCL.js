import{_ as e,c as t,o as s,ae as n}from"./chunks/framework.tuuL-SzM.js";const p=JSON.parse('{"title":"User Management Commands","description":"","frontmatter":{},"headers":[],"relativePath":"commands/user-management.md","filePath":"commands/user-management.md"}'),i={name:"commands/user-management.md"};function o(c,a,l,r,m,d){return s(),t("div",null,a[0]||(a[0]=[n('<h1 id="user-management-commands" tabindex="-1">User Management Commands <a class="header-anchor" href="#user-management-commands" aria-label="Permalink to &quot;User Management Commands&quot;">​</a></h1><p>These commands help you manage customer accounts in the Adminbolt system.</p><h2 id="bolt-create-admin-account" tabindex="-1"><code>bolt:create-admin-account</code> <a class="header-anchor" href="#bolt-create-admin-account" aria-label="Permalink to &quot;`bolt:create-admin-account`&quot;">​</a></h2><p>Creates a new administrator account in the system.</p><h3 id="example" tabindex="-1">Example: <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example:&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bolt:create-admin-account</span></span></code></pre></div><p>This command will prompt you for the necessary information to create a new admin account, including:</p><ul><li>Admin name</li><li>Email address</li><li>Password</li></ul><p>The command prevents the creation of duplicate admin accounts with the same email address.</p><h2 id="bolt-create-customer-account" tabindex="-1"><code>bolt:create-customer-account</code> <a class="header-anchor" href="#bolt-create-customer-account" aria-label="Permalink to &quot;`bolt:create-customer-account`&quot;">​</a></h2><p>Creates a new customer account in the system.</p><h3 id="example-1" tabindex="-1">Example: <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example:&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bolt:create-customer-account</span></span></code></pre></div><p>This command will prompt you for the necessary information to create a new customer account, including:</p><ul><li>Customer name</li><li>Email address</li><li>Password</li><li>Account type and permissions</li></ul><p>After successfully creating a customer account, you&#39;ll be able to manage the account&#39;s hosting subscriptions, domains, and other settings through the Adminbolt interface.</p>',16)]))}const u=e(i,[["render",o]]);export{p as __pageData,u as default};
