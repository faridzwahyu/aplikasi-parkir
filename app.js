import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';

const app = express();

app.set('view engine', 'ejs');

app.use(expressEjsLayouts);

app.get('/', (req, res) => {
    res.render('homepage', {
        title: 'Halaman Home',
        layout: 'layouts/main-layout'
    });
})

app.get('/rekap', (req, res) => {
    res.render('rekap', {
        title: 'Rekap',
        layout: 'layouts/main-layout'
    });
})

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1><b>Page Not Found 404</b></h1>');
})

app.listen(3000, () => {
    console.info('Server is running in port 3000');
});