const dotenv = require('dotenv');

// the order priority is high to low, same variable will not be covered
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });
