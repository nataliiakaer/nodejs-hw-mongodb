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

router.get('/contacts', ctrlWrapper(getContactsController));

router.get(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController),
);

router.post(
  '/contacts',
  jsonParser,
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.post(
  '/register',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.delete(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);

router.put(
  '/contacts/:contactId',
  isValidId,
  jsonParser,
  validateBody(updateSontactSchema),
  ctrlWrapper(upsertContactController),
);

router.patch(
  '/contacts/:contactId',
  isValidId,
  jsonParser,
  validateBody(updateSontactSchema),
  ctrlWrapper(patchContactController),
);

router.use(authenticate);

router.get('/', ctrlWrapper(getContactsController));

export default router;
