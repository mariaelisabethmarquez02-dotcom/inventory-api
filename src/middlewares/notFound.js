function notFound(req, res, next){

    res.status(404).json({
        ok: false,
        error: "Ruta no encontrada"
    });

}

module.exports = { notFound };