# express-session-file

Simple file session store for use with Express 4
and express-session (https://github.com/expressjs/session)

## Installation


## Options

    - `path` storage path (optional, default: process.env.TMPDIR) 
    - `prefix` filename prefix (optional, default: `file-store-`)
    - `useAsync` use asynchronous file operations (optional, default: false)
    - `printDebug` prints debug output (optional, default: false)
    - `reapInterval` interval between removing stale sessions (optional, default: 600000 (10 mins), disable: -1 )
    - `maxAge` maximum age of sessions before removal (optional, default: 600000*3 (30 mins) )

## Example

See example/app.js

    var FileSessionStore = require('express-session-file');

    app.use(session({
        store: new FileSessionStore({
          path:"/tmp/express-sessions",
          printDebug:true
        })
    }));
