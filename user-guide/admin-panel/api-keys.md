# API Keys

API Keys provide secure authentication and access management for your AdminBolt platform integrations and external service connections.

## API Keys Overview

**URL:** `/admin/api-keys`
![API Keys Interface](/screenshots/admin-api-keys.png)

### Interface Elements

#### Top Bar
- **New API Key** button: Create additional API credentials
- **Search** functionality: Filter existing API keys

#### Key Management List
- Displays existing API keys
- Columns:
- Name
- Edit options
- Pagination controls
- Per page selection

## Creating API Key

### API Key Details
1. **Name**
* Descriptive identifier for the API key
* Helps distinguish between different keys
* Optional but recommended

2. **API Key**
* Automatically generated
* Unique authentication identifier
* Used for API request authentication

3. **API Secret**
* Automatically generated
* Confidential credential
* Shown only during initial creation

### Security Settings

#### Key Status
- **Active Toggle**
* Enable/disable API key access
* Temporary revocation without deletion

#### IP Restriction
- Limit API access to specific IP addresses
- Enhanced security configuration
- Granular access control

### Creation Options
- **Create**: Generate and save API key
- **Create & Create Another**: Quick successive key generation
- **Cancel**: Abort key creation process

## Key Management Best Practices

### Security Recommendations
- Generate unique keys for different purposes
- Regularly rotate API credentials
- Restrict IP access when possible
- Keep API secrets confidential
- Disable unused keys

### Usage Guidelines
- Use descriptive names
- Monitor key usage
- Implement least privilege principle
- Set appropriate access scopes

## Troubleshooting

### Common Scenarios
- Key generation failures
- Authentication issues
- Access restriction problems

### Recommended Actions
- Verify key details
- Check IP configurations
- Regenerate keys if compromised
- Contact support for persistent issues

## System Integration

### Supported Use Cases
- External service authentication
- Programmatic platform access
- Third-party tool integration
- Automated system interactions

## Management Benefits
- Centralized credential management
- Granular access control
- Enhanced security configurations
- Flexible authentication mechanisms