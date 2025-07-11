const express = require('express');
const router = express.Router();

/**
 * GET /api/productos
 * Retrieves all products ordered by ID.
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
 * GET /api/productos/:id
 * Retrieves a single product by its ID.
 * Returns 404 if the product is not found.
 */
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await req.db.query(
      'SELECT * FROM productos WHERE id = $1',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/productos
 * Creates a new product with the provided data.
 * Returns 400 if required fields are missing.
 */
router.post('/', async (req, res, next) => {
  try {
    const { nombre, descripcion, precio, stock, categoria_id } = req.body;
    if (!nombre || precio == null || stock == null || !categoria_id) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const result = await req.db.query(
      `
      INSERT INTO productos (nombre, descripcion, precio, stock, categoria_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [nombre, descripcion || '', precio, stock, categoria_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

/**
 * PUT /api/productos/:id
 * Updates an existing product by its ID.
 * Returns 404 if the product is not found.
 */
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, categoria_id } = req.body;
    const result = await req.db.query(
      `
      UPDATE productos
      SET nombre = $1, descripcion = $2, precio = $3, stock = $4, categoria_id = $5
      WHERE id = $6
      RETURNING *
      `,
      [nombre, descripcion || '', precio, stock, categoria_id, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE /api/productos/:id
 * Deletes a product by its ID.
 * Returns 404 if the product is not found.
 * Returns 204 No Content on success.
 */
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await req.db.query(
      'DELETE FROM productos WHERE id = $1 RETURNING *',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;

/*
  This Express router module defines all REST API endpoints for managing products.
  It includes CRUD operations: list, retrieve by ID, create, update, and delete.
  All endpoints handle errors properly and return appropriate HTTP status codes.
*/

