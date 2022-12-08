import updateNotifier from 'update-notifier';
import packageJson from './templates/package.json' assert { type: 'json' };
import generator from 'yeoman-generator';
updateNotifier({ pkg: packageJson }).notify();

module.exports = class extends generator {
  welcome() {
    this.log('Welcome to the Alpine, Tailwindcss with postcss generator');
    this.log('Starting copying files');
  }

  writing() {
    this.fs.copy(this.templatePath('postcss.config.js'), this.destinationPath('postcss.config.js'));
    this.fs.copy(this.templatePath('tailwind.config.js'), this.destinationPath('tailwind.config.js'));
    this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));
    this.fs.copy(this.templatePath('package-lock.json'), this.destinationPath('package-lock.json'));
    this.fs.copy(this.templatePath('app/dist'), this.destinationPath('dist'));
    this.fs.copy(this.templatePath('app/src'), this.destinationPath('src'));
  }

  end() {
    this.log(' ');
    this.log('Finished generating files!');
    this.log(' ');
  }
};
