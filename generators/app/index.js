'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the pioneering ' + chalk.red('generator-react-flux-scaffold') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'Name',
      message: 'Enter Your Project Name:',
      default: this.appname
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('docs/dummyDoc.txt'),
      this.destinationPath('docs/dummyDoc.txt')
    );
    this.fs.copy(
      this.templatePath('src/actions/Action.js'),
      this.destinationPath('src/actions/Action.js')
    );
    this.fs.copy(
      this.templatePath('src/components/AboutComponent/about.css'),
      this.destinationPath('src/components/AboutComponent/about.css')
    );
    this.fs.copy(
      this.templatePath('src/components/AboutComponent/About.js'),
      this.destinationPath('src/components/AboutComponent/About.js')
    );
    this.fs.copy(
      this.templatePath('src/components/AboutComponent/package.json'),
      this.destinationPath('src/components/AboutComponent/package.json')
    );
    this.fs.copy(
      this.templatePath('src/components/ErrorComponent/error.css'),
      this.destinationPath('src/components/ErrorComponent/error.css')
    );
    this.fs.copy(
      this.templatePath('src/components/ErrorComponent/ErrorPage.js'),
      this.destinationPath('src/components/ErrorComponent/ErrorPage.js')
    );
    this.fs.copy(
      this.templatePath('src/components/ErrorComponent/package.json'),
      this.destinationPath('src/components/ErrorComponent/package.json')
    );
    this.fs.copy(
      this.templatePath('src/components/HomeComponent/home.css'),
      this.destinationPath('src/components/HomeComponent/home.css')
    );
    this.fs.copy(
      this.templatePath('src/components/HomeComponent/HomePage.js'),
      this.destinationPath('src/components/HomeComponent/HomePage.js')
    );
    this.fs.copy(
      this.templatePath('src/components/HomeComponent/package.json'),
      this.destinationPath('src/components/HomeComponent/package.json')
    );
    this.fs.copy(
      this.templatePath('src/constants/Constants.js'),
      this.destinationPath('src/constants/Constants.js')
    );
    this.fs.copy(
      this.templatePath('src/Dispatcher/AppDispatcher.js'),
      this.destinationPath('src/Dispatcher/AppDispatcher.js')
    );
    this.fs.copy(
      this.templatePath('src/images/react-logo.png'),
      this.destinationPath('src/images/react-logo.png')
    );
    this.fs.copy(
      this.templatePath('src/routes/Routes.js'),
      this.destinationPath('src/routes/Routes.js')
    );
    this.fs.copy(
      this.templatePath('src/services/Services.js'),
      this.destinationPath('src/services/Services.js')
    );
    this.fs.copy(
      this.templatePath('src/utils/utils.txt'),
      this.destinationPath('src/utils/utils.txt')
    );
    this.fs.copy(
      this.templatePath('src/index.html'),
      this.destinationPath('src/index.html')
    );
    this.fs.copy(
      this.templatePath('src/main.js'),
      this.destinationPath('src/main.js')
    );
    this.fs.copy(
      this.templatePath('./_.babelrc'),
      this.destinationPath('./.babelrc')
    );
    this.fs.copy(
      this.templatePath('./_.gitignore'),
      this.destinationPath('./.gitignore')
    );
    this.fs.copy(
      this.templatePath('./_gulpfile.js'),
      this.destinationPath('./gulpfile.js')
    );
    this.fs.copy(
      this.templatePath('./_package.json'),
      this.destinationPath('./package.json')
    );
  },

  install: function () {
    this.installDependencies({
    });
  }
});
