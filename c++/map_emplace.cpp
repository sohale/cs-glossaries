// old file name: cpp-details/map_emplace.cpp
/*
checks correctness of strings like the following:
(()()(()))

shows some differences between emplace() and emplace_hint() and insert() .not in a very elegant way
*/

#include <sstream>
#include <map>
#include <cassert>

int solution(string &S) {

    const bool VERBOSE = false;
    std::map<char,int> d;
    d['('] = +1;
    d[')'] = -1;
    d.insert(pair<char,int>(']',-1));
    if (VERBOSE) {
        auto i1 = d.emplace_hint(d.end(), pair<char,int>('x',99));
        cout << "?" << (i1 == d.end()) << "" << endl;
    
        auto i2 = d.emplace_hint(d.end(), pair<char,int>('x',90));
        cout << "?" << (i2 == d.end()) << "" << endl;
    
        pair<std::map<char,int>::iterator,bool> i3p = d.emplace(pair<char,int>('x',99));
        cout << "?" << (i3p.first == d.end()) << " ("<< i3p.second << ")" << endl;
        // all above ones return false and 0.
    }
    
    /*
        emplace returns a PAIR but emplace_hint returns iter only.
        
        emplace_hist is relevant for performance only.
      
        why return ofemplace_hint is simpler?
        
        What happnes if each one has repeated?
        
        both return the new element itself.
        
        the hint should ideally point to this position (of the element that will be the next in fiuture) but it an be totally irrelevant. (Does it matter if it is one before?)
    */
    
    //insert, which either copies or moves existing objects into the container.
    // emplace: does not copy if it exists.
    
    if (VERBOSE) {
        for(auto di=d.cbegin(); di != d.cend(); ++di) {
            cout << "d[\'" << di->first << "\']=" << di->second << "; ";
        }
        
        cout<<endl;
    }
    
    if (VERBOSE) {
        assert (d.count(']') == 1);
        assert (d.count('x') == 1);
        assert (d.count('y') == 0);
    }
    
    stringstream ss;
    int ctr = 0;
    for(auto i = S.begin(); i<S.end(); ++i) {
        assert(d.find(*i) != d.end());
        int lookup = d.find(*i)->second;
        int  sg = d[*i];
        assert(sg == lookup);
        ss << ((sg>0)?"+":"-");
        ctr += sg;
        if (ctr<0)
            return 0;
    }
    if (VERBOSE)
        cout << ss.str();
    
    //return 1;
    return (ctr == 0) ? 1 : 0;
}
