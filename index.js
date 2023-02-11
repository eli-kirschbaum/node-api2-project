// require your server and launch it here
const server = require('./api/server');

const PORT = 9999;

server.listen(PORT, () => {
    console.log('listening on ', PORT)
});