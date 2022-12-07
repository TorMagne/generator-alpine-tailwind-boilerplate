const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  welcome() {
    this.log('Welcome to the Alpine, Tailwindcss with postcss generator');
  }

  writing() {
    this.fs.copy(this.templatePath('postcss.config.js'), this.destinationPath('postcss.config.js'));
    this.fs.copy(this.templatePath('tailwind.config.js'), this.destinationPath('tailwind.config.js'));
    this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));
    this.fs.copy(this.templatePath('package-lock.json'), this.destinationPath('package-lock.json'));
    this.fs.copy(this.templatePath('app/dist'), this.destinationPath('dist'));
    this.fs.copy(this.templatePath('app/src'), this.destinationPath('src'));
  }

  end() {
    // this.log(' ');
    // this.log('Finished generating! Before running, make sure you have the Gulp CLI installed globally, and you do NOT have Gulp itself installed globally.');
    // this.log(' ');
    // this.log("If you're not sure how to do this, read this for more info:");
    // this.log('https://coder-coder.com/install-gulp-globally-on-windows/');
    // this.log(' ');
    // this.log("Once you have the Gulp CLI installed globally, you can run 'gulp' in this project directory to run Gulp!");
    // this.log(' ');
  }
};