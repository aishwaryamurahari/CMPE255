//Here's the code for the Expense Tracker Application with React for the frontend and Node.js with Express.js for the backend:

//### BACKEND CODE STARTS HERE ###


```javascript
// server.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();
const PORT = process.env.PORT || 5000;

// Use built-in express.json() middleware instead of body-parser
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/expenses', authMiddleware, expenseRoutes);

// Error handling for unexpected issues
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
```



```javascript
// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
```

```javascript
// routes/expenseRoutes.js

const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.get('/', expenseController.getAllExpenses);
router.post('/', expenseController.addExpense);
router.put('/:id', expenseController.updateExpense);
router.delete('/:id', expenseController.deleteExpense);

module.exports = router;
```

```javascript
// controllers/authController.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
  // Register logic
};

const login = async (req, res) => {
  // Login logic
};

module.exports = {
  register,
  login
};
```

```javascript
// controllers/expenseController.js

const Expense = require('../models/Expense');
const getAllExpenses = async (req, res) => {
  // Get all expenses logic
};

const addExpense = async (req, res) => {
  // Add expense logic
};

const updateExpense = async (req, res) => {
  // Update expense logic
};

const deleteExpense = async (req, res) => {
  // Delete expense logic
};

module.exports = {
  getAllExpenses,
  addExpense,
  updateExpense,
  deleteExpense
};
```

