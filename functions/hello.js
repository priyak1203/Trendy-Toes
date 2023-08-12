// domain/.netlify/functions/hello

export const handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: ' Hello World' }),
  };
};
