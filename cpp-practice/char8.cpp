//  detect the problem is pre-C++20
// sizeof(frog)

#include <iostream>


int main() {
    wchar_t frog = '🐸';
    // warning: multi-character character constant [-Wmultichar]
    std::cout << frog;
    // output: -257978184%


}
