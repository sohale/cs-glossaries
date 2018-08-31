
// Comparator

class my_comparator {
}

// priority_queue
/*
    A priority_queue does not need a separate field for the value (key) used for sorting. A brilliant way of abstracting: pop_back() returns the largest.
    What is it all about?
    ''its first element is always the greatest of the elements it contains, according to some strict weak ordering criterion``
    Common use:
    Internal: ?
    You cannot iterate elements.
    related: heap.
*/

// comparing and functors
vector<int> frequency;
struct cmp
{
    bool operator()(int a, int b)
    {
        return frequency[a] < frequency[b];
    }
};
set<int, cmp> s;
priority_queue<int, vector<int>, cmp> pq;
// See questions: Why is () used in the following?
sort(data.begin(), data.end(), greater<int>());


// TODO: split into separate cpp files in a folder for this. `comparator.cpp`, etc.
