

 #include <Eigen/Eigen>
+// using Eigen::Matrix;

  
This is 

internal definition:
```C++
typedef Matrix<float, 3, 1> Vector3f;
```

This will not work:
```c++
template<typename R>
typedef Eigen::Matrix<R, 3, 1> vec3_tt;
```
Instead do this:
```c++
template<typename R>
using vec3_tt = typename Eigen::Matrix<R, 3, 1>;
```

Instead of this (in fact this file just does this: `#include "Dense" #include "Sparse"`),
```c++
#include <Eigen/Eigen>
using Eigen::Matrix;
```
instead, do this:
```C++
#include <Eigen/Dense>
```

```c++
  Eigen::Matrix<float, 3, 1> v = Eigen::Matrix<float, 3, 1>::Zero();
```

Constants:
```c++
  Eigen::Matrix4d::Constant(4.5)
  Eigen::Matrix3f :: Zero()
```

More sample code:
```c++
 TEST(localiser, eigen_style1) {

  Eigen::Matrix<float, 3, 1> v;
  v << 0.0f, 0.0f, 0.0f;

  ASSERT_EQ(1, 1);

  std::cout << "      Eigen version is "
            << EIGEN_MAJOR_VERSION << "." << EIGEN_MINOR_VERSION << std::endl;
}
```
