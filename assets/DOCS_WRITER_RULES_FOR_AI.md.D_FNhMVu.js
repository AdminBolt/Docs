import{_ as i,c as t,o as l,ag as a}from"./chunks/framework.Ds6Eueu6.js";const m=JSON.parse(`{"title":"Documentation Writing Rules","description":"","frontmatter":{},"headers":[{"level":3,"title":"Do's","slug":"do-s","link":"#do-s","children":[]},{"level":3,"title":"Don'ts","slug":"don-ts","link":"#don-ts","children":[]},{"level":3,"title":"API Documentation","slug":"api-documentation","link":"#api-documentation","children":[]},{"level":3,"title":"User Guides","slug":"user-guides","link":"#user-guides","children":[]},{"level":3,"title":"Technical Specifications","slug":"technical-specifications","link":"#technical-specifications","children":[]},{"level":3,"title":"Code Blocks","slug":"code-blocks","link":"#code-blocks","children":[]},{"level":3,"title":"Tables","slug":"tables","link":"#tables","children":[]},{"level":3,"title":"Notes and Warnings","slug":"notes-and-warnings","link":"#notes-and-warnings","children":[]},{"level":3,"title":"Command Execution","slug":"command-execution","link":"#command-execution","children":[]},{"level":3,"title":"Common Commands","slug":"common-commands","link":"#common-commands","children":[]},{"level":3,"title":"Documentation Requirements","slug":"documentation-requirements","link":"#documentation-requirements","children":[]}],"relativePath":"DOCS_WRITER_RULES_FOR_AI.md","filePath":"DOCS_WRITER_RULES_FOR_AI.md"}`),n={name:"DOCS_WRITER_RULES_FOR_AI.md"};function o(s,e,r,c,d,u){return l(),t("div",null,e[0]||(e[0]=[a('<h1 id="documentation-writing-rules" tabindex="-1">Documentation Writing Rules <a class="header-anchor" href="#documentation-writing-rules" aria-label="Permalink to &quot;Documentation Writing Rules&quot;">​</a></h1><h2 id="general-principles" tabindex="-1">General Principles <a class="header-anchor" href="#general-principles" aria-label="Permalink to &quot;General Principles&quot;">​</a></h2><ol><li><p><strong>Clarity First</strong></p><ul><li>Write in clear, concise language</li><li>Avoid jargon unless necessary for technical accuracy</li><li>Define technical terms on first use</li><li>Use active voice whenever possible</li><li>Always use <code>bolt-cli</code> when documenting Laravel commands</li></ul></li><li><p><strong>Structure and Organization</strong></p><ul><li>Follow a logical hierarchy</li><li>Use consistent heading levels</li><li>Include a table of contents for documents longer than 1000 words</li><li>Group related information together</li></ul></li><li><p><strong>Formatting Standards</strong></p><ul><li>Use Markdown for all documentation</li><li>Maintain consistent formatting throughout</li><li>Use code blocks for code examples: ```language</li><li>Use inline code formatting for variables, functions, and commands: <code>example</code></li><li>Never document raw Laravel artisan commands - always use <code>bolt-cli</code></li></ul></li><li><p><strong>Code Examples</strong></p><ul><li>Provide working, tested code examples</li><li>Include comments explaining complex logic</li><li>Show both basic and advanced usage</li><li>Include error handling where appropriate</li></ul></li><li><p><strong>Version Control</strong></p><ul><li>Document version numbers clearly</li><li>Maintain a changelog</li><li>Mark deprecated features</li><li>Include &quot;Last Updated&quot; dates</li></ul></li><li><p><strong>Accessibility</strong></p><ul><li>Use descriptive alt text for images</li><li>Maintain good color contrast</li><li>Provide text alternatives for multimedia content</li><li>Use semantic HTML when applicable</li></ul></li><li><p><strong>Content Guidelines</strong></p><ul><li>Start with an overview/introduction</li><li>Include prerequisites when necessary</li><li>Provide step-by-step instructions</li><li>Add troubleshooting sections for common issues</li></ul></li><li><p><strong>Best Practices</strong></p><ul><li>Keep paragraphs short (3-4 sentences maximum)</li><li>Use bullet points and numbered lists for clarity</li><li>Include relevant cross-references</li><li>Add examples for complex concepts</li></ul></li><li><p><strong>Review Process</strong></p><ul><li>Perform technical accuracy review</li><li>Check for grammatical errors</li><li>Verify all links work</li><li>Test code examples</li></ul></li><li><p><strong>Maintenance</strong></p><ul><li>Review documentation quarterly</li><li>Update for new features/changes</li><li>Remove outdated information</li><li>Keep examples current with latest versions</li></ul></li></ol><h2 id="writing-style" tabindex="-1">Writing Style <a class="header-anchor" href="#writing-style" aria-label="Permalink to &quot;Writing Style&quot;">​</a></h2><h3 id="do-s" tabindex="-1">Do&#39;s <a class="header-anchor" href="#do-s" aria-label="Permalink to &quot;Do&#39;s&quot;">​</a></h3><ul><li>Write in present tense</li><li>Use second person (&quot;you&quot;) for instructions</li><li>Be consistent with terminology</li><li>Include relevant screenshots or diagrams</li><li>Provide context for technical concepts</li><li>Link to related documentation</li><li>Use Oxford commas</li></ul><h3 id="don-ts" tabindex="-1">Don&#39;ts <a class="header-anchor" href="#don-ts" aria-label="Permalink to &quot;Don&#39;ts&quot;">​</a></h3><ul><li>Don&#39;t use colloquial language</li><li>Avoid assumptions about user knowledge</li><li>Don&#39;t use gender-specific pronouns</li><li>Avoid using &quot;easy,&quot; &quot;simple,&quot; or &quot;just&quot;</li><li>Don&#39;t leave placeholder content</li><li>Avoid excessive technical jargon</li><li>Don&#39;t use unstable URLs</li></ul><h2 id="documentation-types" tabindex="-1">Documentation Types <a class="header-anchor" href="#documentation-types" aria-label="Permalink to &quot;Documentation Types&quot;">​</a></h2><h3 id="api-documentation" tabindex="-1">API Documentation <a class="header-anchor" href="#api-documentation" aria-label="Permalink to &quot;API Documentation&quot;">​</a></h3><ul><li>Include all endpoints</li><li>Document request/response formats</li><li>Provide authentication details</li><li>Include rate limiting information</li><li>Show example requests and responses</li></ul><h3 id="user-guides" tabindex="-1">User Guides <a class="header-anchor" href="#user-guides" aria-label="Permalink to &quot;User Guides&quot;">​</a></h3><ul><li>Start with basic concepts</li><li>Progress to advanced topics</li><li>Include practical examples</li><li>Add troubleshooting sections</li><li>Provide quick start guide</li></ul><h3 id="technical-specifications" tabindex="-1">Technical Specifications <a class="header-anchor" href="#technical-specifications" aria-label="Permalink to &quot;Technical Specifications&quot;">​</a></h3><ul><li>Detail system requirements</li><li>Include architecture diagrams</li><li>Document dependencies</li><li>Specify performance metrics</li><li>List security considerations</li></ul><h2 id="formatting-examples" tabindex="-1">Formatting Examples <a class="header-anchor" href="#formatting-examples" aria-label="Permalink to &quot;Formatting Examples&quot;">​</a></h2><h3 id="code-blocks" tabindex="-1">Code Blocks <a class="header-anchor" href="#code-blocks" aria-label="Permalink to &quot;Code Blocks&quot;">​</a></h3><p>```javascript // Example code function example() { return &quot;Hello, World!&quot;; } ```</p><h3 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-label="Permalink to &quot;Tables&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Header 1</th><th>Header 2</th></tr></thead><tbody><tr><td>Content</td><td>Content</td></tr></tbody></table><h3 id="notes-and-warnings" tabindex="-1">Notes and Warnings <a class="header-anchor" href="#notes-and-warnings" aria-label="Permalink to &quot;Notes and Warnings&quot;">​</a></h3><blockquote><p><strong>Note:</strong> Important information here</p></blockquote><blockquote><p><strong>Warning:</strong> Critical warning here</p></blockquote><h2 id="review-checklist" tabindex="-1">Review Checklist <a class="header-anchor" href="#review-checklist" aria-label="Permalink to &quot;Review Checklist&quot;">​</a></h2><ul><li>[ ] Technical accuracy verified</li><li>[ ] Grammar and spelling checked</li><li>[ ] Links tested</li><li>[ ] Code examples tested</li><li>[ ] Images have alt text</li><li>[ ] Formatting is consistent</li><li>[ ] No broken references</li><li>[ ] Version information included</li><li>[ ] Prerequisites listed</li><li>[ ] Contact information updated</li></ul><h2 id="laravel-commands" tabindex="-1">Laravel Commands <a class="header-anchor" href="#laravel-commands" aria-label="Permalink to &quot;Laravel Commands&quot;">​</a></h2><h3 id="command-execution" tabindex="-1">Command Execution <a class="header-anchor" href="#command-execution" aria-label="Permalink to &quot;Command Execution&quot;">​</a></h3><p>The <code>bolt-cli</code> wrapper is <strong>required</strong> for all Laravel command execution. Direct use of <code>php artisan</code> commands is not supported in this project.</p><blockquote><p><strong>Warning:</strong> Never use <code>php artisan</code> commands directly. All Laravel commands must be executed using the <code>bolt-cli</code> wrapper.</p></blockquote><h4 id="examples" tabindex="-1">Examples: <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples:&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ❌ INCORRECT - Never use:</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make:controller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> UserController</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ✅ CORRECT - Always use:</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bolt-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bolt-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make:controller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> UserController</span></span></code></pre></div><p>This wrapper is a required component that ensures consistent execution across the project and handles necessary environment setup. Using direct <code>php artisan</code> commands may lead to environment inconsistencies or execution failures.</p><h3 id="common-commands" tabindex="-1">Common Commands <a class="header-anchor" href="#common-commands" aria-label="Permalink to &quot;Common Commands&quot;">​</a></h3><p>Here are some frequently used commands with their required bolt-cli syntax:</p><table tabindex="0"><thead><tr><th>Action</th><th>Required Command</th></tr></thead><tbody><tr><td>Run migrations</td><td><code>bolt-cli migrate</code></td></tr><tr><td>Create controller</td><td><code>bolt-cli make:controller</code></td></tr><tr><td>Create model</td><td><code>bolt-cli make:model</code></td></tr><tr><td>Clear cache</td><td><code>bolt-cli cache:clear</code></td></tr><tr><td>List all routes</td><td><code>bolt-cli route:list</code></td></tr><tr><td>Run tests</td><td><code>bolt-cli test</code></td></tr></tbody></table><blockquote><p><strong>Note:</strong> While all standard Laravel artisan commands are supported, they must be executed through the bolt-cli wrapper. Direct artisan commands are not supported.</p></blockquote><h3 id="documentation-requirements" tabindex="-1">Documentation Requirements <a class="header-anchor" href="#documentation-requirements" aria-label="Permalink to &quot;Documentation Requirements&quot;">​</a></h3><p>When writing documentation that includes Laravel commands:</p><ul><li>Always use <code>bolt-cli</code> prefix</li><li>Never show raw <code>php artisan</code> commands</li><li>Include the warning about required usage where appropriate</li><li>Use the ✅ and ❌ symbols to clearly indicate correct vs incorrect usage</li><li>Explain that this is a requirement, not just a recommendation</li></ul>',39)]))}const p=i(n,[["render",o]]);export{m as __pageData,p as default};
