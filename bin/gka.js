#!/usr/bin/env node

var program = require('commander');
var gka = require("../lib/gka");
var tiny = require("../lib/core/tiny");

var pkg = require('../package.json');
console.log('gka version:' + pkg.version);
console.log();

program
.version('gka version:' + pkg.version)
.option('-d --dir <dir>', 'img dir', /^(.*)$/i, 'test')
.option('-p --prefix <prefix>', 'prefix name', /^(.*)$/i, 'gka-')
.option('-t --tiny <imageFolder>', 'tiny img', /^(.*)$/i, false)
.option('-s --sprites <string>', 'sprites img', /^(.*)$/i, false)
.option('-f --frameduration <string>', 'frameDuration', /^(.*)$/i, false)
.parse(process.argv);

var t = program.tiny,
    s = program.sprites,
    d = program.dir,
    p = program.prefix,
    f = program.frameduration;

if (t) {

    // 图片压缩
    tiny(t);

} else if (d) {

    if (s) {

        // 生成帧动画 - 合图模式
        gka({
            dir: d,
            prefix: p,
            frameDuration: f,
            type: "sprites"
        });
    } else {
        
        // 生成帧动画 - 普通模式
        gka({
            dir: d,
            prefix: p,
            frameDuration: f,
            type: "normal"
        });
    }
    

}

// console.log(' folder: %j', program.folder);
// console.log(' rename: %j', program.rename);



