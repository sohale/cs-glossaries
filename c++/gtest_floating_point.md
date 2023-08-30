# Learnings about use of floating points in GTest

(Also let's keep these small files, almost small tutorials)

### The standard way: `EXPECT_NEAR`

For vectos, it isstill verbose
```c++
  double eps = 0.001;
  ASSERT_NEAR(v.x(), v1.x(), eps);
  ASSERT_NEAR(v.y(), v1.y(), eps);
```

### Use of `ASSERT_PRED2`:

```c++
  auto MatrixEqualityPred = [eps](const Eigen::MatrixXf & lhs, const Eigen::MatrixXf & rhs) {
      return lhs.isApprox(rhs, eps);
  };
  ASSERT_PRED2(MatrixEqualityPred, v, Eigen::Vector2f(.0,.0));
```

### `EXPECT_FLOAT_EQ`

* EXPECT_FLOAT_EQ
* EXPECT_DOUBLE_EQ

Why EXPECT_NEAR as opposed to EXPECT_FLOAT_EQ? Just explicit and predetermined `eps`?

See http://google.github.io/googletest/reference/assertions.html#EXPECT_DOUBLE_EQ

to within 4 ULPs from each other.
Why 4?

So there are 3 levels:
* Exact equality:
* Practically Exact equality (it should represent that number really, Not an approximation in calculation. Approximation misrepresentation only)
* Tolerance or error or ... (`eps`, `tol`)

I need a file to consolidate my understanding about floating point errors (the ULP )
