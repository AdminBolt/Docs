# Multi PHP Extensions

The Multi PHP Extensions section provides a centralized interface to manage PHP extensions across multiple PHP versions within your AdminBolt environment.

## Multi PHP Extensions Overview
**URL:** `/admin/multi-p-h-p-extensions`
![Multi PHP Extensions Interface](/screenshots/admin-multi-php-extensions.png)

### Interface Elements

#### Top Bar
- **Search** field: Filter extensions by name or functionality

#### Information Panel
- Guidance message for adding more PHP extensions through MyApache > Profiles
- Direct link to profile creation workflow

#### List View Columns
- **PHP Version**: Installed PHP version 
- **Extensions**: Currently installed extensions with truncated list
- **Actions**: Enable/Disable Extension button for each PHP version

#### List Controls
- **Per page** dropdown: Adjust number of visible PHP versions 
- **Pagination**: Navigate through multiple results 

## Extension Management

### Extension List Display
The main interface displays:
- Comprehensive list of PHP versions installed on the server
- Abbreviated list of extensions for each PHP version
- Common extensions like bcmath, bz2, calendar, ctype, curl, dom, exif, fileinfo, etc.
- Enable/Disable Extension button for extension management

### Enable/Disable Extension Modal
![Multi PHP Extensions Enable/Disable Interface](/screenshots/admin-multi-php-extensions-enable-disable.png)

When clicking the Enable/Disable Extension button, a modal appears with:
- **Modal title**: "Enable/Disable Extension"
- **Extension list**: Three-column layout of available extensions for the selected PHP version
- Checkboxes for toggling individual extensions
- Extension naming pattern following the PHP version 

### Available Extensions
The extension management interface provides access to numerous PHP extensions:
- **Core extensions**: bz2, calendar, ctype, curl, dom, exif, fileinfo, ftp, gettext
- **Database extensions**: mysqli, mysqli_azure, pdo_mysql, pdo_sqlite, sqlite3
- **XML/Data processing**: simplexml, xml, xmldiff, xmlreader, xmlrpc, xmlwriter, xsl
- **Image manipulation**: gd, imagick
- **Caching systems**: memcached, redis, phpiredis
- **Authentication**: oauth
- **Cryptography**: mcrypt
- **Math/Science**: bcmath, gmp
- **Specialized libraries**: intl, zip, json, phar, sockets

### Management Actions
- **Submit** button: Apply extension configuration changes
- **Cancel** button: Exit without saving changes
- Bulk enable/disable through checkbox selection

## Management Benefits

The Multi PHP Extensions manager streamlines server administration by providing:
- Centralized control of PHP extensions across multiple PHP versions
- Granular extension management through checkboxes
- Clear overview of installed extensions per PHP version
- Simple interface for complex PHP configuration
- Quick toggling of PHP functionality