echo "This will generate the build files"

read -p "You you have to above dependencies installed (y/N)" dep

if [[ ! "$dep" == "" && ! "$dep" == "N" && ! "$dep" == "n"]]; then
    cd api || exit 1
    npm i || exit 1
    tsc server.js || exit 1
    echo "Building the api dependencies is succesfull"

    cd ../ || exit 1
    echo "Building frontend"
    cd wiki
    npm i
    ng build
fi