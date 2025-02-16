import { IncomingMessage, ServerResponse } from 'http';
import http from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.end('Hello World');
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

export default server;