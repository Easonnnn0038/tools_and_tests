const fs = require('fs');


function readfiles(dirpath,ext) {
     

    if (!dirpath) {
        console.log("Please provide a directory path as an argument.");
        return;
    }
    if (!ext) {
        console.log("Please provide a file extension as an argument.");
        return;
    }
    if (!fs.existsSync(dirpath)) {
        console.log("Directory not found.");
        return;
    }

    const stat = fs.statSync(dirpath);
    if (!stat.isDirectory()) {
        console.log("Provided path is not a directory.");
        return;
    }
    const suffix = '.' + ext.replace(/^\./, '');
    const files = fs.readdirSync(dirpath, { recursive: true, withFileTypes: true });
    const jsfiles = files.filter(file => file.isFile() && file.name.endsWith(suffix));
    console.log(jsfiles.map(file => file.name).join('\n'));
    }



readfiles(process.argv[2], process.argv[3]);
    





