// domain/.netlify/functions/single-product

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Single Product Route' }),
  };
};
