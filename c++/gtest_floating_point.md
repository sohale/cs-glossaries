# Learnings about use of floating points in GTest

(Also let's keep these small files, almost small tutorials)

### The standard way: `EXPECT_NEAR`

## Use of `ASSERT_PRED2`:

```c++
  auto MatrixEqualityPred = [eps](const Eigen::MatrixXf & lhs, const Eigen::MatrixXf & rhs) {
      return lhs.isApprox(rhs, eps);
  };
  ASSERT_PRED2(MatrixEqualityPred, v, Eigen::Vector2f(.0,.0));
```

