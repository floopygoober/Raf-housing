const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.json({message: 'OK'})
});

app.get('/api/leaderboard-summary',(req, res) => {
    const summaryData = [
        {name: 'Raf', quote: 'You can name it Jimmy'},
        {name: 'Raf', quote: 'We dont really care about that right now'},
        {name: 'Raf', quote: 'This is the lazy way to do it but we will do it this way'},
        {name: 'Raf', quote: 'Ive always loved Elon Musk and AI'},
        {name: 'Raf', quote: 'Clickity Clickity'},
        {name: 'Raf', quote: '*quickly* Okay'},
        {name: 'Raf', quote: 'It depends'},
        {name: 'Raf', quote: 'Something something Zelda'},
        {name: 'Raf', quote: 'I put all my money into NFTs'},
        {name: 'Raf', quote: 'Tech bros are my favorite coworkers'}
    ]
    res.json(summaryData)
});

// the star means we go top to bottom, the ping wouldnt work so then if its not the leaderboard itll check everything else. 
app.get('*', (req, res) => {
    { // the second set of {} means the response is sent as an object
        res.sendFile(Path.join(__dirname, 'index.html'))
    }
})

app.listen(PORT, () => {
    console.log(`Backend Running at http:localhost${PORT}`);
});
