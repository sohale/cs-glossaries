//  detect the problem is pre-C++20
// sizeof(frog)

#include <iostream>

using std::endl;

int main() {
    wchar_t frog = '🐸';
    // warning: multi-character character constant [-Wmultichar]
    // std::cout << frog << endl;  //  c++20: use of deleted function
    //std::cout << frog << endl;
    // output: -257978184

    char frogc = '🐸';
    // warning: warning: overflow in conversion from 'int' to 'char' changes value from '-257978184' to ''\37777777670'' [-Woverflow]
    std::cout << frogc << endl; //  use of deleted function
    //std::cout << frogc;
    // output: ?

    char8_t frog8 = '🐸';
    // warning: nsigned conversion from 'int' to 'char8_t' changes value from '-257978184' to '184' [-Woverflow]
    // std::cout << frog8 << endl; error: use of deleted function 'std::basic_ostream<char, _Traits>& std::operator<<(std::basic_ostream<char, _Traits>&, char8_t) [with _Traits = std::char_traits<char>]'

    std::string s="";
    //s = s + frog; //errors
}
