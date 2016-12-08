const glob = require('glob');
const path = require('path');


function getEntry(globPath) {
    var files = glob.sync(globPath);
    console.log(files)
    var entries = {},
        entry, dirname, basename, pathname, extname;
    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        extname = path.extname(entry);
        basename = path.basename(entry, extname);
        pathname = path.join(dirname, basename);
        entries[basename] = path.join(__dirname, pathname);
    }
    return entries;
}

const srcPath = path.join(__dirname,'..','/src/**/*');
getEntry(srcPath)



