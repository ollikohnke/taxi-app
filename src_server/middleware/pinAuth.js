const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
      const authHeader = req.headers.authorization;

      // Check if the authorization header exists
      if (!authHeader || !authHeader.startsWith('Bearer: ')) {
        return res.status(401).json({
          status: 'fail',
          message: 'Unauthorized! Missing or invalid token.',
        });
      }

      // Extract the token
      const token = authHeader.split(' ')[1];

      // Verify the token
      const user = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the user payload to the request
      req.user = user;
      console.log("Authorization successfull.")
      next();
  } catch (error) {
      console.error('JWT Verification Error:', error.message); // Log for debugging
      return res.status(401).json({
          status: 'fail',
          message: 'Unauthorized! Invalid or expired token.',
      });
  }
};