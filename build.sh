#!/bin/sh

rm -rf build/*
rm -rf docs/*

# Creates uncompressed versions of the library.
cat src/Shebang.js src/Web-C.js src/WebCCompiler.js src/WebCLib.js src/WebCVM.js > build/webc.js
cat src/Web-C.js src/WebCCompiler.js src/WebCLib.js > build/libc.js

cp build/webc.js bin/
cp build/webc.js js/
cp build/libc.js js/

chmod 755 bin/*

#jsdoc -d ./docs ./package.json ./src

mkdir docs/grammar
cp -r grammar/Web-C.xhtml docs/grammar
