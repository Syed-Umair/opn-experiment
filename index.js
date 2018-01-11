opn = require('opn');
opn('http://sindresorhus.com');
opn('http://sindresorhus.com', {app: 'firefox'});
opn('http://sindresorhus.com', {app: ['google chrome', '--incognito']});
opn('http://sindresorhus.com', {app: ['firefox', '-private-window']});