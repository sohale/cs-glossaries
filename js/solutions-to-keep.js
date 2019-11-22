

/*
If npm install failes on MacOS (with an error related to node-gyp), use the following (tested on MacOS Mojave, 10.14.5)
*/

`CXXFLAGS="-mmacosx-version-min=10.9" LDFLAGS="-mmacosx-version-min=10.9" npm install`

