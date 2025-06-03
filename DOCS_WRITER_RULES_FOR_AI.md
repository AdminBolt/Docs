# Documentation Writing Rules

## General Principles

1. **Clarity First**
   - Write in clear, concise language
   - Avoid jargon unless necessary for technical accuracy
   - Define technical terms on first use
   - Use active voice whenever possible
   - Always use `bolt-cli` when documenting Laravel commands

2. **Structure and Organization**
   - Follow a logical hierarchy
   - Use consistent heading levels
   - Include a table of contents for documents longer than 1000 words
   - Group related information together

3. **Formatting Standards**
   - Use Markdown for all documentation
   - Maintain consistent formatting throughout
   - Use code blocks for code examples: ```language
   - Use inline code formatting for variables, functions, and commands: `example`
   - Never document raw Laravel artisan commands - always use `bolt-cli`

4. **Code Examples**
   - Provide working, tested code examples
   - Include comments explaining complex logic
   - Show both basic and advanced usage
   - Include error handling where appropriate

5. **Version Control**
   - Document version numbers clearly
   - Maintain a changelog
   - Mark deprecated features
   - Include "Last Updated" dates

6. **Accessibility**
   - Use descriptive alt text for images
   - Maintain good color contrast
   - Provide text alternatives for multimedia content
   - Use semantic HTML when applicable

7. **Content Guidelines**
   - Start with an overview/introduction
   - Include prerequisites when necessary
   - Provide step-by-step instructions
   - Add troubleshooting sections for common issues

8. **Best Practices**
   - Keep paragraphs short (3-4 sentences maximum)
   - Use bullet points and numbered lists for clarity
   - Include relevant cross-references
   - Add examples for complex concepts

9. **Review Process**
   - Perform technical accuracy review
   - Check for grammatical errors
   - Verify all links work
   - Test code examples

10. **Maintenance**
    - Review documentation quarterly
    - Update for new features/changes
    - Remove outdated information
    - Keep examples current with latest versions

## Writing Style

### Do's
- Write in present tense
- Use second person ("you") for instructions
- Be consistent with terminology
- Include relevant screenshots or diagrams
- Provide context for technical concepts
- Link to related documentation
- Use Oxford commas

### Don'ts
- Don't use colloquial language
- Avoid assumptions about user knowledge
- Don't use gender-specific pronouns
- Avoid using "easy," "simple," or "just"
- Don't leave placeholder content
- Avoid excessive technical jargon
- Don't use unstable URLs

## Documentation Types

### API Documentation
- Include all endpoints
- Document request/response formats
- Provide authentication details
- Include rate limiting information
- Show example requests and responses

### User Guides
- Start with basic concepts
- Progress to advanced topics
- Include practical examples
- Add troubleshooting sections
- Provide quick start guide

### Technical Specifications
- Detail system requirements
- Include architecture diagrams
- Document dependencies
- Specify performance metrics
- List security considerations

## Formatting Examples

### Code Blocks
\```javascript
// Example code
function example() {
  return "Hello, World!";
}
\```

### Tables
| Header 1 | Header 2 |
|----------|----------|
| Content  | Content  |

### Notes and Warnings
> **Note:** Important information here

> **Warning:** Critical warning here

## Review Checklist

- [ ] Technical accuracy verified
- [ ] Grammar and spelling checked
- [ ] Links tested
- [ ] Code examples tested
- [ ] Images have alt text
- [ ] Formatting is consistent
- [ ] No broken references
- [ ] Version information included
- [ ] Prerequisites listed
- [ ] Contact information updated

## Laravel Commands

### Command Execution
The `bolt-cli` wrapper is **required** for all Laravel command execution. Direct use of `php artisan` commands is not supported in this project.

> **Warning:** Never use `php artisan` commands directly. All Laravel commands must be executed using the `bolt-cli` wrapper.

#### Examples:
```bash
# ❌ INCORRECT - Never use:
php artisan migrate
php artisan make:controller UserController

# ✅ CORRECT - Always use:
bolt-cli migrate
bolt-cli make:controller UserController
```

This wrapper is a required component that ensures consistent execution across the project and handles necessary environment setup. Using direct `php artisan` commands may lead to environment inconsistencies or execution failures.

### Common Commands
Here are some frequently used commands with their required bolt-cli syntax:

| Action | Required Command |
|--------|-----------------|
| Run migrations | `bolt-cli migrate` |
| Create controller | `bolt-cli make:controller` |
| Create model | `bolt-cli make:model` |
| Clear cache | `bolt-cli cache:clear` |
| List all routes | `bolt-cli route:list` |
| Run tests | `bolt-cli test` |

> **Note:** While all standard Laravel artisan commands are supported, they must be executed through the bolt-cli wrapper. Direct artisan commands are not supported.

### Documentation Requirements
When writing documentation that includes Laravel commands:
- Always use `bolt-cli` prefix
- Never show raw `php artisan` commands
- Include the warning about required usage where appropriate
- Use the ✅ and ❌ symbols to clearly indicate correct vs incorrect usage
- Explain that this is a requirement, not just a recommendation
