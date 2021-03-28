import fastify from 'fastify';
import fetch from 'node-fetch';

const App = fastify();

App.get('/', async (request, reply) => {
    // const res = await fetch('https://curli.ir/shortener', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify({ link: 'https://google.com' }),
    //     redirect: 'follow'
    // });
    const res = await fetch('https://bit.ly/3fbbG1i')
    console.log(res);
    return 'test'
})

// Run the server!
const start = async () => {
    try {
        await App.listen(3000)
    } catch (err) {
        App.log.error(err)
        process.exit(1)
    }
}
start()