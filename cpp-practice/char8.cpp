//  detect the problem is pre-C++20
// sizeof(frog)

#include <iostream>

using std::endl;

int main() {
    wchar_t frog = '🐸';
    // warning: multi-character character constant [-Wmultichar]
    std::cout << frog;
    // output: -257978184
    std::cout << endl;

    char frogc = '🐸';
    // warning: warning: overflow in conversion from 'int' to 'char' changes value from '-257978184' to ''\37777777670'' [-Woverflow]
    std::cout << frogc << endl;
    // output: ?

}
