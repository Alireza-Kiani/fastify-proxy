import fastify from 'fastify';
import fetch from 'node-fetch';

const { PORT } = process.env;

const App = fastify();

App.post('/', async (request, reply) => {
    const myreq: any = request.body;
    const res = await fetch(myreq.link);
    return res.url;
})

// Run the server!
const start = async () => {
    try {
        await App.listen(PORT || 8080)
        console.log('Running on port ' + (PORT || 8080));
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}
start()