export const handler = async (event) => {
  const keyword = event.queryStringParameters.keyword;
  const response = `${process.env.NAME || "YOUR-NAME"} says ${keyword}`;
  
  return {
      statusCode: 200,
      body: JSON.stringify({ message: response }),
  };
};
