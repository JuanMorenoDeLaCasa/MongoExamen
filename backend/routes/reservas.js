const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Reserva = require('../models/Reserva');

// muestra en una tabla la lista de reservas
router.get('/', async(req, res) => {
    const listado = await Reserva.find({});
    res.render('reservas/index', {reservas: listado});
});

// muestra el formulario alta reserva
router.get('/create', (req, res) =>{
    res.render('reservas/create')
});

// guarda el reserva en la BBDD
router.post('/create', async (req, res) =>{
    const {nombre, duracion, fecha, hora} = req.body;
    const reserva = new Reserva({
        nombre: nombre,
        duracion: duracion,
        fecha: fecha,
        hora: hora
    });
    try {
        await reserva.save();
        res.redirect('/reservas');
    } catch (error) {
        res.render('mensaje', {mensajePagina: 'ERROR: ' + 
            'Esa reserva ya existe en la base de datos.'})
    }
});

router.get('/edit/:id', async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id);
        if (reserva)
            res.render('reservas/edit', {reserva: reserva});
        else
            res.render('mensaje', {mensajePagina:'No encuentro esa reserva en la base de datos'});
    } catch {
        res.render('mensaje', {mensajePagina: 'Error al intentar editar reserva'});
    }

});

router.post('/edit/:id', async (req, res) => {
    try {
        const {nombre, duracion, fecha, hora} = req.body;
        await Reserva.findByIdAndUpdate(req.params.id ,{
            nombre: nombre,
            duracion: duracion,
            fecha: fecha,
            hora: hora
        }); 
        res.redirect('/reservas');
    } catch {
        res.render('mensaje', {mensajePagina: 'Error al intentar editar reserva'});
    }

});


router.get('/delete/:id', async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id);
        if (reserva)
            res.render('reservas/delete', {reserva: reserva});
        else
            res.render('mensaje', {mensajePagina:'No encuentro ese reserva en la base de datos'});
    } catch {
        res.render('mensaje', {mensajePagina: 'Error al intentar borrar reserva'});
    }

});

router.post('/delete/:id', async (req, res) => {
    try {
        const {nombre, duracion, fecha, hora} = req.body;
        await Reserva.findByIdAndDelete(req.params.id); 
        res.redirect('/reservas');
    } catch {
        res.render('mensaje', {mensajePagina: 'Error al intentar borrar reserva'});
    }

});


module.exports=router;