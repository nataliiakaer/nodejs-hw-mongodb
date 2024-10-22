// src/utils/parseFilterParams.js

const parseType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isType = (contactType) => ['work', 'home', 'personal'].includes(contactType);

  if (isType(contactType)) return contactType;
};

// const parseIsFavourite = (boolean) => {
//   const isString = typeof number === 'string';
//   if (!isString) return;

//   const parsedNumber = parseInt(number);
//   if (Number.isNaN(parsedNumber)) {
//     return;
//   }

//   return parsedNumber;
// };

export const parseFilterParams = (query) => {
  const { contactType } = query;

  const parsedType = parseType(contactType);

  return {
    type: parsedType,
  };
};
