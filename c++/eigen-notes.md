Don't do this:
```c++
#include <Eigen/Eigen>
using Eigen::Matrix;
```
(in fact the file `<Eigen/Eigen>` just does this: `#include "Dense" #include "Sparse"`),
instead, do this:
```C++
#include <Eigen/Dense>
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


A nice usage:
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

  Eigen::Matrix<float, 3, 1> v = Eigen::Matrix<float, 3, 1>::Zero();
  v[0] = 1;

// You can cout:
  std::cout << "v:" << v << std::endl;

  Eigen::Matrix<float, 3, 1> w;
  w << 0.0f, 0.0f, 0.0f;
  
  
  ASSERT_EQ(1, 1);

  std::cout << "      Eigen version is "
            << EIGEN_MAJOR_VERSION << "." << EIGEN_MINOR_VERSION << std::endl;
}
```


```c++
typedef Eigen::Vector3f vec3f_t;
typedef Matrix<float, 3, 1> Vector3f;  // internally
```

```c++
TEST(localiser, rotate_minus45) {
  vec3f_t v{1, 0, 0};
  vec3f_t r = rotate_minus45_1(v);
  const float ε = 0.0001;
  EXPECT_NEAR(r[0], 0.707107, ε);
  EXPECT_NEAR(r[1], -0.707107, ε);
  EXPECT_NEAR(r[2], 0., ε);
}
```


CMakeLists.txt
```cmake

find_package(Eigen3 REQUIRED)
# find_package (Eigen3 3.3 REQUIRED NO_MODULE) #?
...

target_link_libraries(mymy_lib
  PUBLIC ${stdmsgsxyzxyzxyz_TARGETS}

  PRIVATE Eigen3::Eigen
)

...
if(BUILD_TESTING)
  ...
  ament_add_gtest(mytests123
    ${test_files}
    TIMEOUT 6 # (seconds)
    WORKING_DIRECTORY .
    # SKIP_TEST
  )

  target_link_libraries(mytests123
    mymy_lib # includes Eigen? no. Eigen is PRIVATE.
  
    # cannot use PUBLIC, PRIVATE. etc
    #PUBLIC mymy_lib
    #PRIVATE Eigen3::Eigen

    Eigen3::Eigen
  )
  # todo: Why does it affect the `#include`s?
  # ?? for #include "../include/.../core_logic.hpp" ?

endif()
```
