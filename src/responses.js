const respond = (request, response, content, type, status) => {
  response.writeHead(status, { 'Content-Type': type });
  response.write(content);
  response.end();
  return;
};

const success = (request, response, acceptedTypes) => {
  const responseObj = {
    message: 'This is a successful response'
  };
  
  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>This is a successful response</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, responseXML, 'text/xml', 200);
  }

  const responseText = JSON.stringify(responseObj);

  return respond(request, response, responseText, 'application/json', 200);
};

const badRequest = (request, response, acceptedTypes, params) => {
  const responseObj = {
    message: 'This request has the required parameters',
  };

  if(!params.valid || params.valid !== 'true') {
    responseObj.message = 'Missing valid query parameter set to true';
    responseObj.id = 'badRequest';

    if (acceptedTypes[0] === 'text/xml') {
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>Missing valid query parameter set to true</message>`;
      responseXML = `${responseXML} <id>badRequest</id>`;
      responseXML = `${responseXML} </response>`;
  
      return respond(request, response, responseXML, 'text/xml', 400);
    }

    const responseText = JSON.stringify(responseObj);
    return respond(request, response, responseText, 'application/json', 400);
  }

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>This request has the required parameters</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, responseXML, 'text/xml', 200);
  }

  const responseText = JSON.stringify(responseObj);

  return respond(request, response, responseText, 'application/json', 200);
};

const unauthorized = (request, response, acceptedTypes, params) => {
  const responseObj = {
    message: 'This request has the required authorization',
  };

  if(!params.loggedIn || params.loggedIn !== 'yes') {
    responseObj.message = 'Missing loggedIn query parameter set to yes';
    responseObj.id = 'unauthorized';

    if (acceptedTypes[0] === 'text/xml') {
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>Missing loggedIn query parameter set to yes</message>`;
      responseXML = `${responseXML} <id>unauthorized</id>`;
      responseXML = `${responseXML} </response>`;
  
      return respond(request, response, responseXML, 'text/xml', 401);
    }

    const responseText = JSON.stringify(responseObj);
    return respond(request, response, responseText, 'application/json', 401);
  }

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>This request has the required authorization</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, responseXML, 'text/xml', 200);
  }

  const responseText = JSON.stringify(responseObj);

  return respond(request, response, responseText, 'application/json', 200);
};

const forbidden = (request, response, acceptedTypes) => {
  const responseObj = {
    message: 'You do not have access to this content.',
    id: 'forbidden'
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>You do not have access to this content.</message>`;
    responseXML = `${responseXML} <id>forbidden</id>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, responseXML, 'text/xml', 403);
  }

  const responseText = JSON.stringify(responseObj);

  return respond(request, response, responseText, 'application/json', 403);
};

const internal = (request, response, acceptedTypes) => {
  const responseObj = {
    message: 'Internal Server Error. Something went wrong.',
    id: 'internalError'
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>Internal Server Error. Something went wrong.</message>`;
    responseXML = `${responseXML} <id>internalError</id>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, responseXML, 'text/xml', 500);
  }

  const responseText = JSON.stringify(responseObj);

  return respond(request, response, responseText, 'application/json', 500);
};

const notImplemented = (request, response, acceptedTypes) => {
  const responseObj = {
    message: 'A get request for this page has not been implemented yet. Check again later for updated content.',
    id: 'notImplemented'
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>A get request for this page has not been implemented yet. Check again later for updated content.</message>`;
    responseXML = `${responseXML} <id>notImplemented</id>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, responseXML, 'text/xml', 501);
  }

  const responseText = JSON.stringify(responseObj);

  return respond(request, response, responseText, 'application/json', 501);
};

const notFound = (request, response, acceptedTypes) => {
  const responseObj = {
    message: 'The page you are looking for was not found.',
    id: 'notFound'
  };
  
  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>The page you are looking for was not found.</message>`;
    responseXML = `${responseXML} <id>notFound</id>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, responseXML, 'text/xml', 404);
  }

  const responseText = JSON.stringify(responseObj);

  return respond(request, response, responseText, 'application/json', 404);
};

module.exports = {
  success,
  badRequest,
  unauthorized,
  forbidden,
  internal,
  notImplemented,
  notFound
};