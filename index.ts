import fastify from 'fastify';
import fetch from 'node-fetch';

const { PORT } = process.env;

const App = fastify();

type LinkInput = {
    link: string
}

App.post('/', async (request, reply) => {
    let { link }: LinkInput = request.body as any;
    if (!/^http:\/\/|^https:\/\//gi.test(link)) {
        link = `https://${link}`;
    }
    const res = await fetch(link);
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