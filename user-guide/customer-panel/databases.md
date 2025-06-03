# Databases

The Databases section provides tools for managing your MySQL/MariaDB databases and database users.

**URL:** `/customer/databases-page`

![Database Management Interface](/screenshots/databases.png)

## Database Management

### List of Databases
The main interface shows all your databases with:
- **Database**: Name and identifier
- **Size (MB)**: Storage usage
- **Privileged Users**: Associated database users
- **Actions**:
  - Edit database settings
  - Delete database

### Database Controls
- **Create database** button for new databases
- Search functionality to find databases
- Per page display options (10, 25, 50, etc.)
- Sorting by database name or size

## Database Users

### List of Database Users
Shows all database users with:
- **Username**: User identifier
- **Actions**:
  - Add user to Database
  - Change Password
  - Delete user

### Editing User Privileges
**URL:** `/customer/databases-page/edit-user`

![Edit Database User Privileges](/screenshots/databases-edit-user.png)

#### User Configuration
- **Username**: Display of selected user
- **Database**: Select target database
- **ALL PRIVILEGES**: Grant all permissions at once

#### Available Privileges
Database-level permissions include:

**Structure Permissions:**
- ALTER: Modify table structures
- CREATE: Create new tables
- CREATE TEMPORARY TABLES: Create temp tables
- DROP: Remove tables/databases
- INDEX: Create/remove indexes
- REFERENCES: Create foreign keys

**Data Permissions:**
- DELETE: Remove records
- INSERT: Add new records
- SELECT: Read data
- UPDATE: Modify existing records

**Function Permissions:**
- ALTER ROUTINE: Modify procedures
- CREATE ROUTINE: Create procedures
- CREATE VIEW: Create views
- SHOW VIEW: View definitions
- EXECUTE: Run procedures

**Administrative:**
- EVENT: Create/modify events
- LOCK TABLES: Control table locks
- TRIGGER: Create/modify triggers

### User Management Controls
- **Create database user** button
- Search functionality for users
- Per page display options
- User sorting capabilities

## Quick Actions

### Database Operations
- Create new databases
- Edit database settings
- Delete existing databases
- Monitor database size

### User Operations
- Create database users
- Assign users to databases
- Change user passwords
- Remove user access

## Search and Filter
Both database and user lists include:
- Search boxes for quick finding
- Column sorting
- Results per page selection
- Total items counter

## Access Control
- User privilege management
- Database access restrictions
- Password security
- User-database relationships

## Main Features

### Database Operations
- Create new databases
- Manage existing databases
- Set database quotas
- Configure user permissions
- Access phpMyAdmin

### User Management
- Create database users
- Set user privileges
- Manage user passwords
- Configure access rights

### Quick Actions
- **Create Database**: Set up new databases
- **Create User**: Add database users
- **Import**: Upload database dumps
- **Export**: Backup databases
- **phpMyAdmin**: Direct database access

## Database List View

### List Columns
- **Database Name**: Identifier and status
- **Size**: Current storage usage
- **Users**: Associated user accounts
- **Actions**: Available operations
  - Manage Users
  - Configure Settings
  - Access phpMyAdmin
  - Delete Database

### Search and Filter
- Search by database name
- Filter by status
- Sort by size or name
- View usage statistics

## Security Features
- Password protection
- User privilege management
- IP access restrictions
- SSL/TLS connections
- Backup and recovery options

## Integration
- Web application support
- Development tools
- Monitoring and alerts
- Performance optimization

## Common Tasks

### Creating a Database
1. Click "Create Database"
2. Enter database name
3. Set character set and collation
4. Assign users and permissions

### Managing Users
1. Create or select users
2. Set access privileges
3. Configure passwords
4. Define connection limits

### Database Maintenance
- Regular backups
- Performance monitoring
- Storage optimization
- Security updates 