# Find a Project

## Technical Overview

## Running the Project

### Setting up pnpm

This project uses [pnpm](https://pnpm.io) as its package manager. To install pnpm, run the following command:

```bash
$ npm -i pnpm -g
```

### [Optional] Running the Development PostgreSQL Database via Docker

_This step can be skipped if you would like you use a locally installed PostgreSQL database instead._

To make it easier to get up and running, we've added two shell scripts to start and stop the development Docker database.

This will start a PostgreSQL database with the following settings:

| Setting   | Value      |
| --------- | ---------- |
| port:     | `5432`     |
| username: | `postgres` |
| password: | `postgres` |

```bash
# Start Developer DB Container
$ ./run-dev-db.sh

# Stop Development DB container
$ ./run-dev-db.sh
```

If using Unix based Operating Systems, you will have to use sudo before running the command.

```bash
# Start Developer DB Container in Linux
$ sudo ./run-dev-db.sh

# Stop Development DB container in Linux
$ sudo ./run-dev-db.sh
```
