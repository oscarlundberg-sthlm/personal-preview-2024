#!/bin/zsh

cd public/content/img;

for file in *.jpg; do
    filename="${file%.*}";
    imagePreviewName="${filename}_preview.jpg";
    sips -Z 32 $file --out "preloads/${imagePreviewName}";
done;

cd -;