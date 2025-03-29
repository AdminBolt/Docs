import{_ as e,c as i,o as s,ag as t}from"./chunks/framework.Ds6Eueu6.js";const l="/screenshots/databases.png",r="/screenshots/databases-edit-user.png",m=JSON.parse('{"title":"Databases","description":"","frontmatter":{},"headers":[{"level":3,"title":"List of Databases","slug":"list-of-databases","link":"#list-of-databases","children":[]},{"level":3,"title":"Database Controls","slug":"database-controls","link":"#database-controls","children":[]},{"level":3,"title":"List of Database Users","slug":"list-of-database-users","link":"#list-of-database-users","children":[]},{"level":3,"title":"Editing User Privileges","slug":"editing-user-privileges","link":"#editing-user-privileges","children":[]},{"level":3,"title":"User Management Controls","slug":"user-management-controls","link":"#user-management-controls","children":[]},{"level":3,"title":"Database Operations","slug":"database-operations","link":"#database-operations","children":[]},{"level":3,"title":"User Operations","slug":"user-operations","link":"#user-operations","children":[]},{"level":3,"title":"Database Operations","slug":"database-operations-1","link":"#database-operations-1","children":[]},{"level":3,"title":"User Management","slug":"user-management","link":"#user-management","children":[]},{"level":3,"title":"Quick Actions","slug":"quick-actions-1","link":"#quick-actions-1","children":[]},{"level":3,"title":"List Columns","slug":"list-columns","link":"#list-columns","children":[]},{"level":3,"title":"Search and Filter","slug":"search-and-filter-1","link":"#search-and-filter-1","children":[]},{"level":3,"title":"Creating a Database","slug":"creating-a-database","link":"#creating-a-database","children":[]},{"level":3,"title":"Managing Users","slug":"managing-users","link":"#managing-users","children":[]},{"level":3,"title":"Database Maintenance","slug":"database-maintenance","link":"#database-maintenance","children":[]}],"relativePath":"user-guide/customer-panel/databases.md","filePath":"user-guide/customer-panel/databases.md"}'),n={name:"user-guide/customer-panel/databases.md"};function o(d,a,u,c,b,g){return s(),i("div",null,a[0]||(a[0]=[t('<h1 id="databases" tabindex="-1">Databases <a class="header-anchor" href="#databases" aria-label="Permalink to &quot;Databases&quot;">​</a></h1><p>The Databases section provides tools for managing your MySQL/MariaDB databases and database users.</p><p><strong>URL:</strong> <code>/customer/databases-page</code></p><p><img src="'+l+'" alt="Database Management Interface"></p><h2 id="database-management" tabindex="-1">Database Management <a class="header-anchor" href="#database-management" aria-label="Permalink to &quot;Database Management&quot;">​</a></h2><h3 id="list-of-databases" tabindex="-1">List of Databases <a class="header-anchor" href="#list-of-databases" aria-label="Permalink to &quot;List of Databases&quot;">​</a></h3><p>The main interface shows all your databases with:</p><ul><li><strong>Database</strong>: Name and identifier</li><li><strong>Size (MB)</strong>: Storage usage</li><li><strong>Privileged Users</strong>: Associated database users</li><li><strong>Actions</strong>: <ul><li>Edit database settings</li><li>Delete database</li></ul></li></ul><h3 id="database-controls" tabindex="-1">Database Controls <a class="header-anchor" href="#database-controls" aria-label="Permalink to &quot;Database Controls&quot;">​</a></h3><ul><li><strong>Create database</strong> button for new databases</li><li>Search functionality to find databases</li><li>Per page display options (10, 25, 50, etc.)</li><li>Sorting by database name or size</li></ul><h2 id="database-users" tabindex="-1">Database Users <a class="header-anchor" href="#database-users" aria-label="Permalink to &quot;Database Users&quot;">​</a></h2><h3 id="list-of-database-users" tabindex="-1">List of Database Users <a class="header-anchor" href="#list-of-database-users" aria-label="Permalink to &quot;List of Database Users&quot;">​</a></h3><p>Shows all database users with:</p><ul><li><strong>Username</strong>: User identifier</li><li><strong>Actions</strong>: <ul><li>Add user to Database</li><li>Change Password</li><li>Delete user</li></ul></li></ul><h3 id="editing-user-privileges" tabindex="-1">Editing User Privileges <a class="header-anchor" href="#editing-user-privileges" aria-label="Permalink to &quot;Editing User Privileges&quot;">​</a></h3><p><strong>URL:</strong> <code>/customer/databases-page/edit-user</code></p><p><img src="'+r+'" alt="Edit Database User Privileges"></p><h4 id="user-configuration" tabindex="-1">User Configuration <a class="header-anchor" href="#user-configuration" aria-label="Permalink to &quot;User Configuration&quot;">​</a></h4><ul><li><strong>Username</strong>: Display of selected user</li><li><strong>Database</strong>: Select target database</li><li><strong>ALL PRIVILEGES</strong>: Grant all permissions at once</li></ul><h4 id="available-privileges" tabindex="-1">Available Privileges <a class="header-anchor" href="#available-privileges" aria-label="Permalink to &quot;Available Privileges&quot;">​</a></h4><p>Database-level permissions include:</p><p><strong>Structure Permissions:</strong></p><ul><li>ALTER: Modify table structures</li><li>CREATE: Create new tables</li><li>CREATE TEMPORARY TABLES: Create temp tables</li><li>DROP: Remove tables/databases</li><li>INDEX: Create/remove indexes</li><li>REFERENCES: Create foreign keys</li></ul><p><strong>Data Permissions:</strong></p><ul><li>DELETE: Remove records</li><li>INSERT: Add new records</li><li>SELECT: Read data</li><li>UPDATE: Modify existing records</li></ul><p><strong>Function Permissions:</strong></p><ul><li>ALTER ROUTINE: Modify procedures</li><li>CREATE ROUTINE: Create procedures</li><li>CREATE VIEW: Create views</li><li>SHOW VIEW: View definitions</li><li>EXECUTE: Run procedures</li></ul><p><strong>Administrative:</strong></p><ul><li>EVENT: Create/modify events</li><li>LOCK TABLES: Control table locks</li><li>TRIGGER: Create/modify triggers</li></ul><h3 id="user-management-controls" tabindex="-1">User Management Controls <a class="header-anchor" href="#user-management-controls" aria-label="Permalink to &quot;User Management Controls&quot;">​</a></h3><ul><li><strong>Create database user</strong> button</li><li>Search functionality for users</li><li>Per page display options</li><li>User sorting capabilities</li></ul><h2 id="quick-actions" tabindex="-1">Quick Actions <a class="header-anchor" href="#quick-actions" aria-label="Permalink to &quot;Quick Actions&quot;">​</a></h2><h3 id="database-operations" tabindex="-1">Database Operations <a class="header-anchor" href="#database-operations" aria-label="Permalink to &quot;Database Operations&quot;">​</a></h3><ul><li>Create new databases</li><li>Edit database settings</li><li>Delete existing databases</li><li>Monitor database size</li></ul><h3 id="user-operations" tabindex="-1">User Operations <a class="header-anchor" href="#user-operations" aria-label="Permalink to &quot;User Operations&quot;">​</a></h3><ul><li>Create database users</li><li>Assign users to databases</li><li>Change user passwords</li><li>Remove user access</li></ul><h2 id="search-and-filter" tabindex="-1">Search and Filter <a class="header-anchor" href="#search-and-filter" aria-label="Permalink to &quot;Search and Filter&quot;">​</a></h2><p>Both database and user lists include:</p><ul><li>Search boxes for quick finding</li><li>Column sorting</li><li>Results per page selection</li><li>Total items counter</li></ul><h2 id="access-control" tabindex="-1">Access Control <a class="header-anchor" href="#access-control" aria-label="Permalink to &quot;Access Control&quot;">​</a></h2><ul><li>User privilege management</li><li>Database access restrictions</li><li>Password security</li><li>User-database relationships</li></ul><h2 id="main-features" tabindex="-1">Main Features <a class="header-anchor" href="#main-features" aria-label="Permalink to &quot;Main Features&quot;">​</a></h2><h3 id="database-operations-1" tabindex="-1">Database Operations <a class="header-anchor" href="#database-operations-1" aria-label="Permalink to &quot;Database Operations&quot;">​</a></h3><ul><li>Create new databases</li><li>Manage existing databases</li><li>Set database quotas</li><li>Configure user permissions</li><li>Access phpMyAdmin</li></ul><h3 id="user-management" tabindex="-1">User Management <a class="header-anchor" href="#user-management" aria-label="Permalink to &quot;User Management&quot;">​</a></h3><ul><li>Create database users</li><li>Set user privileges</li><li>Manage user passwords</li><li>Configure access rights</li></ul><h3 id="quick-actions-1" tabindex="-1">Quick Actions <a class="header-anchor" href="#quick-actions-1" aria-label="Permalink to &quot;Quick Actions&quot;">​</a></h3><ul><li><strong>Create Database</strong>: Set up new databases</li><li><strong>Create User</strong>: Add database users</li><li><strong>Import</strong>: Upload database dumps</li><li><strong>Export</strong>: Backup databases</li><li><strong>phpMyAdmin</strong>: Direct database access</li></ul><h2 id="database-list-view" tabindex="-1">Database List View <a class="header-anchor" href="#database-list-view" aria-label="Permalink to &quot;Database List View&quot;">​</a></h2><h3 id="list-columns" tabindex="-1">List Columns <a class="header-anchor" href="#list-columns" aria-label="Permalink to &quot;List Columns&quot;">​</a></h3><ul><li><strong>Database Name</strong>: Identifier and status</li><li><strong>Size</strong>: Current storage usage</li><li><strong>Users</strong>: Associated user accounts</li><li><strong>Actions</strong>: Available operations <ul><li>Manage Users</li><li>Configure Settings</li><li>Access phpMyAdmin</li><li>Delete Database</li></ul></li></ul><h3 id="search-and-filter-1" tabindex="-1">Search and Filter <a class="header-anchor" href="#search-and-filter-1" aria-label="Permalink to &quot;Search and Filter&quot;">​</a></h3><ul><li>Search by database name</li><li>Filter by status</li><li>Sort by size or name</li><li>View usage statistics</li></ul><h2 id="security-features" tabindex="-1">Security Features <a class="header-anchor" href="#security-features" aria-label="Permalink to &quot;Security Features&quot;">​</a></h2><ul><li>Password protection</li><li>User privilege management</li><li>IP access restrictions</li><li>SSL/TLS connections</li><li>Backup and recovery options</li></ul><h2 id="integration" tabindex="-1">Integration <a class="header-anchor" href="#integration" aria-label="Permalink to &quot;Integration&quot;">​</a></h2><ul><li>Web application support</li><li>Development tools</li><li>Monitoring and alerts</li><li>Performance optimization</li></ul><h2 id="common-tasks" tabindex="-1">Common Tasks <a class="header-anchor" href="#common-tasks" aria-label="Permalink to &quot;Common Tasks&quot;">​</a></h2><h3 id="creating-a-database" tabindex="-1">Creating a Database <a class="header-anchor" href="#creating-a-database" aria-label="Permalink to &quot;Creating a Database&quot;">​</a></h3><ol><li>Click &quot;Create Database&quot;</li><li>Enter database name</li><li>Set character set and collation</li><li>Assign users and permissions</li></ol><h3 id="managing-users" tabindex="-1">Managing Users <a class="header-anchor" href="#managing-users" aria-label="Permalink to &quot;Managing Users&quot;">​</a></h3><ol><li>Create or select users</li><li>Set access privileges</li><li>Configure passwords</li><li>Define connection limits</li></ol><h3 id="database-maintenance" tabindex="-1">Database Maintenance <a class="header-anchor" href="#database-maintenance" aria-label="Permalink to &quot;Database Maintenance&quot;">​</a></h3><ul><li>Regular backups</li><li>Performance monitoring</li><li>Storage optimization</li><li>Security updates</li></ul>',64)]))}const p=e(n,[["render",o]]);export{m as __pageData,p as default};
