# Multi PHP Domains Manager

The Multi PHP Domains Manager provides a centralized interface to manage domain-specific PHP configurations and settings within your AdminBolt environment.

## Multi PHP Domains Manager Overview
**URL:** `/admin/multi-p-h-p-domains`
![Multi PHP Domains Manager Interface](/screenshots/admin-multi-php-domains.png)

### Interface Elements

#### Top Bar
- **Search** field: Filter domains by name or configuration

#### List View Columns
- **Domain**: Domain name with sortable column
- **PHP Version**: Currently assigned PHP version
- **PHP-FPM**: Status indicator for PHP-FPM usage
- **Actions**: Edit button for domain configuration

#### List Controls
- **Per page** dropdown: Adjust number of visible domains (10 by default)
- **Pagination**: Navigate through multiple results

### Quick Actions
For each domain, you can:
- **Edit**: Modify domain PHP configuration settings

## Editing Domain Configuration
![Multi PHP Domains Manager Edit Interface](/screenshots/admin-multi-php-domains-edit.png)
### Edit Domain Interface
The domain editing modal provides:
- **Domain** field: Display of the current domain name (read-only)
- **PHP Version** selector: Dropdown for choosing PHP version
- **Enable PHP FPM** toggle: Switch for enabling/disabling PHP-FPM
- **Save changes** button: Apply configuration modifications
- **Cancel** button: Exit without saving changes

### Configuration Options
1. **PHP Version Selection**
- Choose from available PHP versions (e.g., PHP 8.4.5)
- Version selection affects how PHP scripts are processed

2. **PHP-FPM Toggle**
- Enable for improved performance and resource management
- FastCGI Process Manager for handling PHP requests

## Management Benefits
- Version-specific PHP configuration per domain
- Independent PHP settings across multiple websites
- Performance optimization through PHP-FPM
- Simple interface for complex PHP configuration
- Quick toggling of PHP processing methods