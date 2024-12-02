[Dimensionality reduction using data bricks](https://colab.research.google.com/drive/1KB5zemWFAGZNTQUyRW17tL95aTHlf1Y3?usp=sharing)

[Dimensionality Reduction on Digits dataset](https://colab.research.google.com/drive/1FisSVZtPj7mMpWbzULGpi6jS7ow_JIT_?usp=sharing)

[Dimentionality Reduction using Tabular data](https://colab.research.google.com/drive/1D92pCwWS1xyk9OYVUgq000zZkUBWyKL5?usp=sharing)

[Youtube link](https://youtu.be/JVa0UufnLRs)


# Dimensionality Reduction: A Comparative Study

This project explores dimensionality reduction techniques applied to two different types of datasets:
1. **Digits Dataset**: A collection of 8x8 grayscale images of handwritten digits.
2. **Tabular Dataset**: A structured dataset accessed through Kaggle, typical of real-world scenarios.

## Objectives
The primary goal of this project is to compare the effectiveness of different dimensionality reduction techniques, including linear and non-linear methods, and to evaluate their impact on data representation, computational efficiency, and interpretability.

---

## Techniques and Methodologies

### Digits Dataset
Dimensionality reduction on the digits dataset focuses on transforming 64-pixel features into a smaller dimensional space while retaining sufficient information to distinguish between digit classes.

- **Techniques Used:**
  - **PCA (Principal Component Analysis):**
    - Variants: Randomized PCA, Incremental PCA.
    - Metrics: Explained variance, runtime efficiency, and number of components.
  - **Kernel PCA:** Explores non-linear relationships between features.

- **Key Findings:**
  - Randomized PCA efficiently reduced dimensions while retaining 95% of the variance.
  - Kernel PCA captured non-linear structures but at a higher computational cost.
  - Visualization of cumulative explained variance provided insights into optimal component selection.

---

### Tabular Dataset
Dimensionality reduction for tabular data aims to handle high-dimensional spaces with potential redundancies and noise.

- **Techniques Used:**
  - **PCA:** Linear reduction focusing on explained variance.
  - **UMAP (Uniform Manifold Approximation and Projection):** Non-linear reduction prioritizing neighborhood preservation.

- **Key Findings:**
  - PCA offered an interpretable dimensionality reduction based on variance.
  - UMAP excelled in preserving local and global structures, resulting in better clustering outcomes.
  - Preprocessing, including scaling and handling missing data, was crucial for meaningful results.

---

## Comparative Insights

### Linear vs Non-linear Methods
| Criteria                | PCA                     | Kernel PCA/UMAP          |
|-------------------------|-------------------------|--------------------------|
| **Nature**              | Linear                 | Non-linear               |
| **Interpretability**    | High (explained variance) | Moderate (visualized clusters) |
| **Computational Cost**  | Low                    | Moderate to High         |
| **Preservation of Data Structure** | Moderate               | High                    |

### Dataset Suitability
- **Digits Dataset:** PCA performed well due to the data's relatively linear structure. Kernel PCA provided additional insights for non-linear relationships.
- **Tabular Dataset:** UMAP proved superior for exploratory analysis, revealing clusters and neighborhood structures.

---

## Practical Applications
1. **Digits Dataset:**
   - Classification tasks for digit recognition.
   - Feature extraction for machine learning pipelines.
2. **Tabular Dataset:**
   - Clustering and exploratory analysis.
   - Preprocessing for predictive modeling.

---

## Recommendations
- **Choice of Technique:**
  - Use PCA for quick, interpretable results with linearly separable data.
  - Use UMAP or Kernel PCA for complex datasets requiring non-linear representation.
- **Performance Trade-offs:**
  - Prioritize computational efficiency for large-scale datasets (PCA).
  - Focus on structure preservation for clustering and visualization tasks (UMAP).

---

## Conclusion
Dimensionality reduction is a crucial preprocessing step for high-dimensional datasets. The choice of technique depends on the dataset's characteristics and the specific application. While PCA remains a robust and interpretable option, UMAP and Kernel PCA offer superior insights for non-linear data structures.

