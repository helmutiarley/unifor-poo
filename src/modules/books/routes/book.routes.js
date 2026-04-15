import { Router } from 'express';

import {
  create,
  findByAuthor,
  findByTitle,
  list,
  removeByTitle,
  updateQuantity,
} from '../controllers/book.controller.js';

const router = Router();

router.post('/', create);
router.get('/', list);
router.get('/title/:title', findByTitle);
router.get('/author/:author', findByAuthor);
router.patch('/:id/quantity', updateQuantity);
router.delete('/title/:title', removeByTitle);

export default router;
