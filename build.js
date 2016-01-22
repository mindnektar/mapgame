require("browserify")(["js/main.js"])
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(require("fs").createWriteStream("bundle.js"));
