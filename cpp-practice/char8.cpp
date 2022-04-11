//  detect the problem is pre-C++20
// sizeof(frog)

#include <iostream>

wchar_t frog = '🐸';
// warning: multi-character character constant [-Wmultichar]

int main() {
    std::cout << frog;

    // output: -257978184%
}
