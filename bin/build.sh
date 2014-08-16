#!/bin/bash

BASEDIR=$(dirname $0)
COMPRESSOR="yuicompressor-2.4.8.jar"
if [ -f "$COMPRESSOR" ]
then
	echo "$COMPRESSOR found."
else
	echo "$COMPRESSOR not found. Downloading..."
	wget https://github.com/yui/yuicompressor/releases/download/v2.4.8/"$COMPRESSOR"
fi

java -jar "$COMPRESSOR" -o '.js$:-min.js' "$BASEDIR"/../src/*.js