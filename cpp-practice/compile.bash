
#docker run -v $(PWD):/home -it gcc g++ /home/char8.cpp
# usage:
# docker run -v $(PWD):/sosi -it gcc bash /sosi/compile.bash

# inside the container:
set -ex
cd /sosi
g++ ./char8.cpp
ls -alt
./a.out
