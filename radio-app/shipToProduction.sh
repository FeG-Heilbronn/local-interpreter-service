#!/bin/bash
cd "${0%/*}"
echo "Starting Distribution of app in "
pwd

npm run build
distDir=$(pwd)"/dist/*"
wwwDir="/var/www/interpreter/stations/"

echo "copy from '${distDir}'"
echo "To '${wwwDir}'"

# Create Folder
mkdir -p $wwwDir
cp -fr $distDir $wwwDir