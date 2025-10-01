import HTTP from 'node:http';

const PORT: number = Number(process.env.PORT) || 5000;
const server = HTTP.createServer((request, response) => {
        response.writeHead(200, {
                "Access-Control-Allow-Origin": "https://replit.com",
                "Access-Control-Allow-Methods": "GET, PING, OPTIONS",
                "Content-Type": "text/html"
        } as const);
        response.end("<h3>Copy me, the url above!</h3>");
});



export default (): void => {
        server.listen(PORT, '0.0.0.0', () => {
                console.log(`Server for UptimeRobot is ready on port ${PORT}!`);
        });
};
