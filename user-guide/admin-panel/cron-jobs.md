# Cron Jobs

Cron Jobs provides comprehensive scheduling and management of automated system tasks and background processes.

## Cron Jobs Overview

**URL:** `/admin/cron-jobs`
![Cron Jobs Interface](/screenshots/admin-cron-jobs.png)

### Current Scheduled Jobs

| Schedule | Command | User | Next Execution | Actions |
|----------|---------|------|---------------|---------|
| ***** | `bolt-cli run-auto-ssl` | root | 2025-04-24 13:38 | Edit / Delete |
| 00*** | `bolt-cli my-apache-packages` | root | 2025-04-25 00:00 | Edit / Delete |

## Feature Functionality

### Task Scheduling
- Create automated system tasks
- Define precise execution schedules
- Manage background process automation
- Support complex task configurations

### Scheduling Mechanisms
- Minute-level precision
- Multiple scheduling patterns
- Root and system-level task execution
- Comprehensive task management

## Cron Schedule Syntax

### Schedule Breakdown
- ***** : Every minute/hour/day/month/weekday
- First *   : Minutes (0-59)
- Second *  : Hours (0-23)
- Third *   : Days of month (1-31)
- Fourth *  : Months (1-12)
- Fifth *   : Days of week (0-7)

## Management Capabilities

### Task Management
- Create new cron jobs
- Edit existing scheduled tasks
- Delete unnecessary jobs
- View upcoming executions

### Job Configuration
- Specify precise execution times
- Select appropriate system commands
- Choose execution user
- Set task frequency

## System Integration

### Related Features
- System Updates
- Linux Packages
- Health Check
- Supervisor Log
- Panel Log

## Best Practices

### Cron Job Management
- Use minimal privilege execution
- Document each scheduled task
- Monitor task performance
- Validate task outcomes
- Implement error handling

### Recommended Configurations
- Avoid overlapping schedules
- Use absolute paths
- Implement logging
- Handle potential failures
- Test schedules thoroughly

## Maintenance Guidelines

### Regular Tasks
- Review scheduled jobs
- Remove outdated tasks
- Validate task effectiveness
- Update scheduling as needed

## Management Benefits
- Automated system maintenance
- Precise task scheduling
- Centralized job management
- Improved system reliability
- Reduced manual intervention
- Consistent background processing