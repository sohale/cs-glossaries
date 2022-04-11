
# How I did it, not to be repeated ever again:
# git submodule add git@github.com:sol-prog/Clang-in-Docker.git Clang-in-Docker
# git submodule update --init --recursive
#cd cpp-practice/Clang-in-Docker
#docker build .
# failed

# https://hub.docker.com/r/frolvlad/alpine-gcc
#brew install gcc
docker run -it gcc gcc
docker run -v $(PWD):/home -it gcc gcc /home/char8.cpp
