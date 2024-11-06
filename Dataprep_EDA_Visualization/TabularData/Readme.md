# AutoViML House Price Prediction

## Description
A machine learning project using AutoViML to predict house prices based on the Zillow Home Value dataset. The model performs automated feature selection and hyperparameter tuning using Random Search optimization.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/autoviml-house-prediction.git
cd autoviml-house-prediction
```

2. Install required packages:
```bash
pip install numpy scipy pandas scikit-learn autoviml
```

## Usage

1. Prepare your data file (`State_time_series.csv`) with required columns:
   - ZHVI_AllHomes
   - Date
   - Additional feature columns

2. Run the model:
```python
import numpy as np
import scipy
import pandas as pd
from sklearn.model_selection import train_test_split
from autoviml.Auto_ViML import Auto_ViML

# Compatibility fix
scipy.interp = np.interp

# Load data
data = pd.read_csv('State_time_series.csv')
X = data.drop(columns=['ZHVI_AllHomes', 'Date'])
y = data['ZHVI_AllHomes']

# Prepare data
y = y.fillna(y.mean()).astype(float)
data_for_autoviml = pd.concat([X, y], axis=1)
data_for_autoviml.columns = list(X.columns) + ['target']

# Split data
train_data, val_data = train_test_split(data_for_autoviml, test_size=0.2, random_state=42)

# Train model
trained_model, best_features, _ = Auto_ViML(
    train=train_data,
    target='target',
    test=val_data,
    verbose=1,
    hyper_param='RS',
    feature_reduction=True,
    scoring_parameter='rmse'
)
```

## Features
- Automated feature selection
- Hyperparameter optimization using Random Search
- Missing value handling
- Data type conversion and compatibility
- Train-validation split functionality
- RMSE-based model evaluation

## Dependencies
- Python 3.x
- NumPy
- SciPy
- Pandas
- Scikit-learn
- AutoViML

## Configuration
Key parameters in the model:
- `test_size`: 0.2 (20% validation set)
- `random_state`: 42 (for reproducibility)
- `scoring_parameter`: 'rmse'
- `hyper_param`: 'RS' (Random Search)
- `feature_reduction`: True

## Troubleshooting

### Common Issues
1. Missing Value Error
```python
# Fix by adding mean imputation
data.fillna(0, inplace=True)
```

2. Data Type Compatibility
```python
# Convert float64 to float32
for col in train_data.columns:
    if train_data[col].dtype == 'float64':
        train_data[col] = train_data[col].astype('float32')
```

### Error Messages
- If you see "model_type error": Use the latest version of AutoViML
- For memory issues: Reduce data size or use float32 instead of float64

## Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments
- AutoViML development team
- Zillow for the dataset
- Contributors and maintainers


- [https://colab.research.google.com/drive/1aIhdsrxlYYIN00n_IOOgIrLbmrJCURtX?usp=sharing](Link to colab)