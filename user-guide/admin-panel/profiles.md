# Profiles

The Profiles section provides a centralized interface to create, configure, and manage Apache server environments with customized PHP settings within your AdminBolt environment.

## Profiles Overview

**URL:** `/admin/my-apache-profiles`
![Profiles Interface](/screenshots/admin-profiles.png)

### Interface Elements

#### Top Bar
- **Create** button: Create custom Apache profiles
- **Quick Create** button: Rapidly deploy standard Apache configurations
- **Import Profile** button: Import existing Apache configurations

#### List View Columns
- **Name**: Profile identifier
- **Packages**: Enabled Apache modules and PHP packages
- **Is default**: Status indicator (Default/Custom)
- **Actions**: Available operations
    - Edit Profile Details
    - Delete Profile(for non-default profiles)

#### List Controls
- **Per page** dropdown: Adjust number of visible profiles
- **Search field**: Filter profiles by name or features
- **Pagination**: Navigate through multiple pages

### Quick Actions
For each profile, you can:
- **Edit**: Modify profile configurations and enabled modules
- **Delete**: Remove custom profiles from the system (not available for default profiles)

## Creating Profiles
![Create Profile Interface](/screenshots/admin-profiles-create.png)

### Apache MPM Tab
The Apache MPM (Multi-Processing Module) tab allows configuration of server processing models:

1. **Available MPM Modules**
   - **mod_mpm_event**: Event-driven processing model for high concurrency
   - **mod_mpm_prefork**: Traditional non-threaded processing
   - **mod_mpm_worker**: Hybrid processing model with threads

2. **Interface Features**
   - Toggle switches for enabling/disabling each MPM module
   - Source indicator displaying "AdminBolt" for core modules
   - Pagination controls showing total results count
   - Per page selection for viewing more modules

### Apache Modules Tab
The Apache Modules tab provides comprehensive web server functionality control:

1. **Key Security Modules**
   - **mod_ssl**: SSL/TLS module for the Apache HTTP Server
   - **mod_suphp**: Module for executing PHP scripts with owner permissions

2. **Compatibility Modules**
   - **mod_access_compat**: Backwards compatibility for access control
   - **mod_actions**: Action triggering on specific content types

3. **Interface Features**
   - Descriptive information for each module's functionality
   - Source indicators showing "BOLT" for system modules
   - Toggle switches for enabling/disabling each module
   - Search functionality for finding specific modules

### PHP Versions Tab
The PHP Versions tab offers multi-version PHP support configuration:

1. **Available PHP Versions**
   - PHP 7.4 through 8.2 (with additional versions as released)
   - Consistent package descriptions
   - Repository source indicators displaying "remi-safe"

2. **Version Management**
   - Independent version selection with toggle switches
   - Multiple concurrent PHP version support
   - Clean interface for managing version compatibility

### PHP Extensions Tab
The PHP Extensions tab enables customization of PHP functionality:

1. **Extension Status**
   - May display "No my apache php extensions" when none are configured
   - Search functionality for finding specific extensions
   - Filter controls for extension management

2. **When Extensions Are Available**
   - Version-specific PHP extensions
   - Common PHP libraries and features
   - Repository source indicators

### Review Tab
The Review tab provides a final configuration overview:

1. **Package Impact Summary**
   - Warning about packages not affected by provisioning
   - Status message when no packages will be affected
   - Multi-column display of enabled components when configured

2. **Provisioning Controls**
   - Option to export configuration as JSON
   - Final deployment functionality through provisioning

## Quick Create Profiles
![Quick Create Profile Interface](/screenshots/admin-profiles-quick-create.png)
One-click profile creation with pre-configured settings

### Apache MPM Tab
The Quick Create option automatically enables and configures all available MPM modules:

1. **MPM Modules Configuration**
   - **mod_mpm_event**: Enabled by default
   - **mod_mpm_prefork**: Fully activated
   - **mod_mpm_worker**: Automatically configured

2. **Default Interface Settings**
   - All toggle switches set to active state
   - "AdminBolt" source indicator displayed for all core modules
   - Full pagination controls enabled
   - Maximum per-page view activated (displaying all modules)

### Apache Modules Tab
The Quick Create option enables comprehensive module coverage:

1. **Security Modules**
   - **mod_ssl**: Fully enabled with default secure configuration
   - **mod_suphp**: Activated for enhanced PHP script execution

2. **Compatibility Modules**
   - **mod_access_compat**: Enabled for maximum backwards compatibility
   - **mod_actions**: Activated for broad content type support

3. **Interface Configuration**
   - All modules set to active state
   - Full descriptive information displayed
   - "BOLT" source indicators shown for all system modules
   - Toggle switches set to maximum coverage

### PHP Versions Tab
The Quick Create option provides maximum PHP version flexibility:

1. **PHP Version Coverage**
   - All available PHP versions (7.4 through 8.2) fully enabled
   - Comprehensive package descriptions activated
   - "remi-safe" repository sources fully configured

2. **Version Management**
   - All PHP versions simultaneously activated
   - Full version compatibility ensured
   - Maximum flexibility in version selection

### PHP Extensions Tab
The Quick Create option maximizes PHP extension coverage:

1. *Extension Configuration**
   - All available PHP extensions enabled
   - Comprehensive search functionality activated
   - Full filter controls implemented

2. **Extension Scope**
   - Complete version-specific PHP extensions activated
   - All common PHP libraries and features enabled
   - Repository source indicators fully displayed

### Review Tab
The Quick Create option provides a comprehensive configuration overview:

1. **Package Impact**
   - Full disclosure of all packages affected by provisioning
   - Comprehensive status messages
   - Detailed multi-column display of all enabled components

2. **Provisioning Controls**
   - Full configuration export to JSON
   - Maximum deployment functionality activated
   - One-click comprehensive provisioning

## Importing Profiles
![Import Profile Interface](/screenshots/admin-profiles-import.png)

### Import Interface
- **Profile Name**: Custom name for the imported profile
- **Apache Profile JSON**: File upload area with drag & drop support
- **Browse** button: Select JSON configuration file
- Upload a valid Apache profile JSON file exported from another system

### Import Options
- **Submit**: Process the uploaded profile configuration
- **Cancel**: Exit without importing

## Editing Profiles
![Edit Profile Interface](/screenshots/admin-profiles-edit.png)

### Apache MPM Tab
The Apache MPM (Multi-Processing Module) tab allows configuration of server processing models:

1. **Available MPM Modules**
   - **mod_mpm_event**: Event-driven processing model for high concurrency
   - **mod_mpm_prefork**: Traditional non-threaded processing
   - **mod_mpm_worker**: Hybrid processing model with threads

2. **Interface Features**
   - Toggle switches for enabling/disabling each MPM module
   - Source indicator displaying "AdminBolt" for core modules
   - Pagination controls showing total results count
   - Per page selection for viewing more modules

### Apache Modules Tab
The Apache Modules tab provides comprehensive web server functionality control:

1. **Key Security Modules**
   - **mod_ssl**: SSL/TLS module for the Apache HTTP Server
   - **mod_suphp**: Module for executing PHP scripts with owner permissions

2. **Compatibility Modules**
   - **mod_access_compat**: Backwards compatibility for access control
   - **mod_actions**: Action triggering on specific content types

3. **Interface Features**
   - Descriptive information for each module's functionality
   - Source indicators showing "BOLT" for system modules
   - Toggle switches for enabling/disabling each module
   - Search functionality for finding specific modules

### PHP Versions Tab
The PHP Versions tab offers multi-version PHP support configuration:

1. **Available PHP Versions**
   - PHP 7.4 through 8.2 (with additional versions as released)
   - Consistent package descriptions
   - Repository source indicators displaying "remi-safe"

2. **Version Management**
   - Independent version selection with toggle switches
   - Multiple concurrent PHP version support
   - Clean interface for managing version compatibility

### PHP Extensions Tab
The PHP Extensions tab enables customization of PHP functionality:

1. **Extension Status**
   - May display "No my apache php extensions" when none are configured
   - Search functionality for finding specific extensions
   - Filter controls for extension management

2. **When Extensions Are Available**
   - Version-specific PHP extensions
   - Common PHP libraries and features
   - Repository source indicators

### Review Tab
The Review tab provides a final configuration overview:

1. **Package Impact Summary**
   - Warning about packages not affected by provisioning
   - Status message when no packages will be affected
   - Multi-column display of enabled components when configured

2. **Provisioning Controls**
   - Option to export configuration as JSON
   - Final deployment functionality through provisioning

### Editing Profile Workflow
1. **Profile Selection**
   - Navigate to /admin/my-apache-profiles
   - Select the specific profile to modify

2. **Configuration Tabs**
   - Apache MPM Tab: Configure processing modules
   - Apache Modules Tab: Manage server functionality
   - PHP Versions Tab: Select and manage PHP versions
   - PHP Extensions Tab: Customize PHP extensions
   - Review Tab: Finalize and deploy configuration

3. **Deployment Options**
   - Provision: Apply changes to the server
   - Export as JSON: Save configuration for backup or sharing

### Additional Editing Capabilities
   - Granular control over each server component
   - Real-time preview of configuration changes
   - Ability to revert to previous configurations
   - Comprehensive search and filter functionality
   - Support for complex, multi-version server setups

### Best Practices
   - Carefully review all changes before provisioning
   - Maintain backups of critical configurations
   - Use JSON export for configuration management
   - Test changes in a staging environment first
   - Understand the impact of module and extension modifications


## Profile Management Benefits
The Profiles section streamlines Apache and PHP administration by providing:

- Centralized management of server configurations
- Multiple PHP version support on a single server
- Fine-grained control over Apache modules
- Easy enabling/disabling of PHP extensions
- Profile export/import for consistent deployments
- Quick creation of standard configurations