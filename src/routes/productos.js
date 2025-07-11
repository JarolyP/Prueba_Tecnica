const express = require('express');
const router = express.Router();

/**
 * GET /api/productos - Obtener todos los productos
 */
router.get('/', async (req, res, next) => {
  try {
    const result = await req.db.query('SELECT * FROM productos ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/productos/:id - Obtener producto por id
 */
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await req.db.query('SELECT * FROM productos WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/productos - Crear un nuevo producto
 */
router.post('/', async (req, res, next) => {
  try {
    const { nombre, descripcion, precio, stock, categoria_id } = req.body;
    if (!nombre || precio == null || stock == null || !categoria_id) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
    const result = await req.db.query(
      'INSERT INTO productos (nombre, descripcion, precio, stock, categoria_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nombre, descripcion || '', precio, stock, categoria_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

/**
 * PUT /api/productos/:id - Actualizar producto por id
 */
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, categoria_id } = req.body;
    const result = await req.db.query(
      'UPDATE productos SET nombre=$1, descripcion=$2, precio=$3, stock=$4, categoria_id=$5 WHERE id=$6 RETURNING *',
      [nombre, descripcion || '', precio, stock, categoria_id, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE /api/productos/:id - Eliminar producto por id
 */
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await req.db.query('DELETE FROM productos WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;

