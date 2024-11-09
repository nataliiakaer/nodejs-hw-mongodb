import { Router } from 'express';
import express from 'express';

import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
  upsertContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateSontactSchema,
} from '../validation/contacts.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

const jsonParser = express.json({
  type: ['application/json', 'application/vnd.api+json'],
});

router.get('/', authenticate, ctrlWrapper(getContactsController));

router.get(
  '/:contactId',
  authenticate,
  isValidId,
  ctrlWrapper(getContactByIdController),
);

router.post(
  '/',
  jsonParser,
  authenticate,
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.post(
  '/register',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

router.put(
  '/:contactId',
  isValidId,
  jsonParser,
  authenticate,
  validateBody(updateSontactSchema),
  ctrlWrapper(upsertContactController),
);

router.patch(
  '/:contactId',
  isValidId,
  jsonParser,
  authenticate,
  validateBody(updateSontactSchema),
  ctrlWrapper(patchContactController),
);

// router.get('/', ctrlWrapper(getContactsController));

export default router;
