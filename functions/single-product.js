// domain/.netlify/functions/single-product

const airtable = require('./airtable-config');

export const handler = async function (event, context, cb) {
  const { id } = event.queryStringParameters;

  if (id) {
    try {
      let product = await airtable.retrieve(id);

      if (product.error) {
        return {
          statusCode: 404,
          body: JSON.stringify({ msg: `No product with id ${id}` }),
        };
      }

      product = { id: product.id, ...product.fields };

      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: `Server Error`,
      };
    }
  }

  return {
    statusCode: 400,
    body: JSON.stringify({ msg: 'Please provide product id' }),
  };
};
