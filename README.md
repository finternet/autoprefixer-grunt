# autoprefixer-grunt
This is just a simple way to setup auto-prefixer for your project. All you need to do is:

1. Install NodeJS
2. Clone this project and copy the content into your project folder
3. Open the command prompt (or Terminal window) and run `npm install`
4. Create folders `less` and `css` into the root or update `Gruntfile.js` to have proper source and destination path.
5. Run `grunt` into command prompt (or Terminal window) or click on `gruntthem.bat` to run automatically

Grunt will watch the changes in `less` folder (or source folder) and then autoprefix the `.css` files and copy them into destination (or 'css') folder.
