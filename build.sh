#!/bin/sh

OUT_PATH='build'
OUT_PKG='gfn-unlocker.zip'
INCLUDE='icons/* background.js manifest.json popup.html'

rm -rf $OUT_PATH
mkdir -p $OUT_PATH
zip -1r "$OUT_PATH/$OUT_PKG" ./ -i $INCLUDE
