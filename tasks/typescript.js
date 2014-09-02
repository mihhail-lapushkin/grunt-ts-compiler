var tmp = require('tmp');
var exec = require('child_process').exec;

tmp.setGracefulCleanup();

module.exports = function (grunt) {
  grunt.registerMultiTask('typescript', 'Compile TypeScript sources to JavaScript', function() {
    var done = this.async();
    var options = this.options({ compilerOptions: {} });
    var outDir = options.compilerOptions.outDir;
    var baseDir = options.baseDir;
    var isBaseDirFileNeeded = outDir && baseDir;
    var baseDirFileIn = baseDir + '/.base.ts';
    
    if (!outDir && !options.compilerOptions.out) {
      throw new Error('Either "outDir" or "out" compiler option must be specified!');
    }
    
    var compilerExec = '"' + process.execPath + '" "' + __dirname + '/../node_modules/typescript/bin/tsc"';
    var compilerOptions = [];
    var compilerFiles = this.filesSrc.concat(isBaseDirFileNeeded ? baseDirFileIn : []);
    
    for (var optionName in options.compilerOptions) {
      var optionValue = options.compilerOptions[optionName];
      
      compilerOptions.push('--' + optionName);
      
      if (optionValue !== true) {
        compilerOptions.push('"' + optionValue + '"');
      }
    }
    
    tmp.file(function(err, path) {
      if (err) {
        throw err;
      }

      if (isBaseDirFileNeeded) {
        grunt.file.write(baseDirFileIn, '');
      }
      
      grunt.file.write(path, compilerOptions.join(' ') + ' "' + compilerFiles.join('" "') + '"');
      
      grunt.log.writeln('Compiling ' + this.filesSrc.length + ' file' + (this.filesSrc.length > 1 ? 's' : '') + '.');
      
      exec(compilerExec + ' @"' + path + '"', function(error, stdout, stderr) {
        if (isBaseDirFileNeeded) {
          grunt.file['delete'](baseDirFileIn);
        }
        
        if (stderr) {
          grunt.log.error(stderr);
          done(false);
        } else {
          if (isBaseDirFileNeeded) {
            grunt.file['delete'](outDir + '/.base.js');
          }
          
          done();
        }
      });
    }.bind(this));
  });
};