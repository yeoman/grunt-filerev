# grunt-filerev [![Build Status](https://secure.travis-ci.org/yeoman/grunt-filerev.png?branch=master)](http://travis-ci.org/yeoman/grunt-filerev)

> Static asset revisioning through file content hash


## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install --save-dev grunt-usemin
```

[grunt]: http://gruntjs.com
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md

## `filerev` task

This task will revision your file based on their content. Meaning that if the content of a given file is changing is revisioned file named ("revved" to make it short) will change. This allow to be sure that the browser will reload file when their content is changing (and not when it's not ;))

### Overview

In your `Gruntfile.js`, a section named `filerev` should be added:

```js
grunt.initConfig({
  filerev: {
    options: {
      encoding: 'utf8',
      algorithm: 'md5',
      length: 8
    },
    images: {
      src: 'img/**/*.{jpg,jpeg,gif,png}'
    }
  },
});
```

### Options

#### options.encoding

Type: `String`  
Default: `'utf8'`

The encoding of the file contents.

#### options.algorithm

Type: `String`  
Default: `'md5'`

`algorithm` is dependent on the available algorithms supported by the version of OpenSSL on the platform. Examples are `'sha1'`, `'md5'`, `'sha256'`, `'sha512'`, etc. On recent releases, `openssl list-message-digest-algorithms` will display the available digest algorithms.

#### options.length

Type: `Number`
Default: `8`

The number of characters of the file content hash to prefix the file name with.

### Destination

When not specifying a destination the (source) files will be replaced by their revved version. For example, with the following configuration:

```js
filerev: {
  images: {
    src: ['img1.png', 'img2.png']
  }
}
```
the 2 files (`img1.png` and `img2.png`) will be renamed after their revved version's name.

If you did prefer to copy them under their new name you can add a `dest` that needs to be a directory. For example, if we want to create the revved version of the 2 image files under the `tmp` destination directory:

```js
filerev: {
  images: {
    src: ['img1.png', 'img2.png'],
    dest: 'tmp'
  }
}
```

## License

[BSD license](http://opensource.org/licenses/bsd-license.php) and copyright Google
