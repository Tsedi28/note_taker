const router = require('express').Router ();

// Import our modular routers for /tips and /feedback

const apiRoutes  = require('./apiRoutes');



router.use('/api', apiRoutes);

module.exports = router;
