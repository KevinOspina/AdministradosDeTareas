import app from './app';

async function main() {
    await app.listen(5000);
    console.log('Listening on port 5000');
}

main();