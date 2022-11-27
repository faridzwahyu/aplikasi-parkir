import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import './utility/database-connection.js';
import { Parkir } from './model/parkir.js';
import { dapatTanggal } from './utility/dapat-tanggal.js';

const app = express();

app.set('view engine', 'ejs');

app.use(expressEjsLayouts);
app.use(express.urlencoded());

app.get('/', async (req, res) => {
    const dataParkir = await Parkir.find();

    res.render('home', {
        title: 'Home',
        layout: 'layouts/main-layout',
        data: dataParkir
    });
})

app.post('/', (req, res) => {
    const nomor = req.body.nomor.toUpperCase();
    const masuk = dapatTanggal();

    Parkir.insertMany({
        nomor, 
        masuk
    });
    res.redirect('/');
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
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