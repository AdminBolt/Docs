# Domain Management

The Domains section allows you to manage your website domains, subdomains, and DNS settings.

**URL:** `/customer/domains-page`

## Domain Overview

![Domains Overview Interface](/screenshots/domains-overview.png)

### Interface Elements
1. **Action Buttons**
   - "New Domain" - Add a new domain
   - "New Sub Domain" - Create a subdomain

2. **Domain List Columns**
   - Domain name and type (MAIN DOMAIN/SUB DOMAIN)
   - Document root path
   - Redirect settings
   - Force HTTPS toggle
   - Actions (Open website, Edit, Delete)

3. **Security Indicators**
   - SSL status (padlock icon)
   - HTTPS enforcement settings

4. **Pagination Controls**
   - Results per page selector
   - Page navigation

### Main Features
- Domain registration and transfer
- DNS management
- Subdomain creation
- SSL certificate management
- Domain forwarding
- Domain parking

## Managing Domains

### Adding a Domain
1. Click "Add Domain" button
2. Choose between:
   - Register new domain
   - Transfer existing domain
   - Use existing domain (point nameservers)

### Domain Settings
- Primary domain configuration
- Nameserver settings
- DNS record management
- Document root directory
- SSL certificate status

## DNS Management

### Record Types
- **A Records**: Direct IPv4 address mapping
- **AAAA Records**: IPv6 address mapping
- **CNAME Records**: Domain aliases
- **MX Records**: Mail server settings
- **TXT Records**: Text information
- **SRV Records**: Service records
- **CAA Records**: Certificate Authority Authorization

### DNS Editor Features
- Add/Edit/Delete records
- Bulk record management
- Import/Export zone files
- DNS propagation checking

## Subdomain Management

### Creating Subdomains
1. Select parent domain
2. Enter subdomain prefix
3. Configure:
   - Document root
   - SSL settings
   - PHP version (if applicable)

### Subdomain Options
- Custom document root
- SSL certificate assignment
- Redirect settings
- Access restrictions

## SSL Certificates

### Certificate Management
- Auto SSL installation
- Manual certificate upload
- Let's Encrypt integration
- Certificate renewal tracking

### SSL Features
- One-click SSL activation
- Multiple domain support
- Wildcard certificates
- SSL status monitoring

## Domain Forwarding

### Forwarding Types
- URL forwarding
- Frame forwarding
- Temporary (302) redirects
- Permanent (301) redirects

### Configuration Options
- Path forwarding
- Query string handling
- HTTP/HTTPS settings
- Header customization

## Domain Parking

### Parking Features
- Custom parking page
- SEO settings
- Analytics integration
- Monetization options

## Best Practices

### Domain Management
- Regular DNS backup
- SSL certificate monitoring
- Nameserver verification
- DNS propagation checking

### Security Recommendations
- Enable DNSSEC
- Regular SSL updates
- Strong DNS passwords
- Access log monitoring

## Troubleshooting

### Common Issues
- DNS propagation delays
- SSL certificate errors
- Domain transfer issues
- Nameserver conflicts

### Resolution Steps
1. Check DNS propagation
2. Verify nameserver settings
3. Validate SSL configuration
4. Review error logs 