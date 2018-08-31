// Refreshing details of small errors I made.

template <typename T>  // typename, not typedef
class AddElements {
    T a;
    public:  // DONT FORGET
    AddElements(T x) {
        this->a = x;  // could be simply `a`. // no need for `this->`
    }
    T add(T b) {
        return a + b;  // no need for `this->`
    }
};

template <>
class AddElements<string>  // MUST SPECIFY THE <T>
{
    string a;
    public: // I FORGOT
    // DONT USE "T". Use the full instance of the type name
    AddElements(string x) {
        a = x;
    }
    string concatenate(string b) {
        return a + b;
    }
};#

// from: https://www.hackerrank.com/challenges/c-class-templates/problem


// typedef typename param_t::baz sub_t;
