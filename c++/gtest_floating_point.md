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


### Eigen
```
  EXPECT_FALSE(((x1 - x2).array().abs() < eps).all()) << "Should not be equal";
  EXPECT_TRUE(((x1 - x2).array().abs() < eps).all()) << "Should be equal";

    // 2nd elements should be always 0, because it's a singular covariance matrix
    double thin_eps = 0.0000001;
    EXPECT_LT(std::abs(sample_mean(1) - true_mean(1) ), thin_eps) <<
      "The degenerate dimension one should be zero.";
  }

```


See NaN in the other [file](.../numerical_nan.cpp) in `work-related`
```
  EXPECT_FALSE(std::isnan(res10(0, 0)));
  EXPECT_FALSE(any_nan(res10));
  EXPECT_FALSE(any_inf(res10));
  EXPECT_FALSE(std::isnan(pubd.odom.pose.pose.position.x));
```
