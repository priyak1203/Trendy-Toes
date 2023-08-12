// domain/.netlify/functions/single-product

const airtable = require('./airtable-config');

exports.handler = async function () {
  try {
    const response = await airtable.list({ maxRecords: 200 });

    const products = response.records.map((product) => {
      const { id, fields } = product;
      const {
        name,
        price,
        colors,
        brand,
        description,
        category,
        shipping,
        featured,
        images,
      } = fields;
      const { url } = images[0];

      return {
        id,
        name,
        price,
        image: url,
        colors,
        brand,
        description,
        category,
        shipping,
        featured,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'There was an error' }),
    };
  }
};
