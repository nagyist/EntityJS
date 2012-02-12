# EntityJS
An HTML5 javascript game engine utlizing the entity-component design. Write highly flexible code in a powerful javascript framework.

[EntityJS Website](http://entityjs.com) | [Demos](http://entityjs.com/demos) | [Tutorials](http://entityjs.com/tutorials) | [API](http://entityjs.com/api)

## Version 0.3

Version 0.3 is a major release with many revisions and a brand new ruby gem to work with. You can now type `entityjs new game-name` and a new game will be created. Of course there are more commands, check below.

There is a new directory structure, testing framework, better minifier, better config file and more. This is currently in alpha and most of it doesn't work!

**Warning:** there are many name changes which will break older versions!

## API
Currently the [API](http://entityjs.com/api) is out of date. It will be updated once version 0.3 is released.

## What makes this different from other javascript game engines?
Entity strives to be the most flexible game engine available. We understand no one likes rewritting the same functions and lines of code over and over. So we have developed a solution to this problem and that is the component-entity design. The traditional approach to game engine design is creating a hierarchy of classes. This is infact the **most** tightly coupled design. This creates close coupled classes whos functionality is strictly typed to one class, its not easily portable to other projects, good luck copying that one needed function and as game development progresses classes get bigger and more complex. You will eventually end up with *god-classes* who control most of the game logic.

This becomes a big mess.

In the world of *entity-component* designs. All logic is implemented in a *component*, as big or small as you want. You can then create an *entity* and add/remove components to it. The entity is a live represantation of all its components. With this low coupling of components and entities you can mix and match components together to create powerful functionality yet still portable and robust.

## Requirements

You must have at least [Ruby 1.8.1+](http://rubyinstaller.org/).

## Installion

EntityJS is now an easy to install gem. In the terminal type in:

`gem install entityjs`

This will install the latest version of the gem and now you can easily create some games!


## Usage

**Warning** at the moment the gemfile is at version 0.2.2 and is **broken**. Wait until version 0.3 to try these commands.

When using these commands make sure you are always in the root directory of your game.

### Creating a New Game

Creating a game is simple, move to any directory and type in:

`entityjs new mygame`

This will create a new game using the default template.

Create a game with a platform template:

`entityjs new mygame platform`

See all available templates:

`entityjs templates`

### Creating a Component

`entityjs comp rock`

This will create a new component called *rock* at src/rock.js and will create a test file inside test/rock.js

`entityjs comp display/hero`

This will create a new component in the directory src/display instead of src/ like before.

### Compiling Code

`entityjs build`

This will minify all entityjs src code and game src code into one file inside /builds

### Running the Game / Tests

`entityjs server`

`localhost:2345` displays game
`localhost:2345/tests` runs tests
`localhost:2345/assets/*name` view sounds / images

## Directory Structure

* Assets - Contains all external files
  * Images - Add any images here and retrieve them with `re.assets.images`
  * Sounds - Add any sounds and retrieve them with `re.assets.sounds`
  * [Custom] - Create any folders or files and they will be available.
    * json, tmx, xml are accepted.

* Builds - Contains the finished builds

* Scripts - Contains all code and will be included.
  * Plugins - Will contain external plugins from other sources.

* Tests - Contains test files to run in [QUnit](http://docs.jquery.com/QUnit)

* config.yml - Optional, allows simple configuration
* readme.txt - Optional, simple description of the game.
  
## Name Changes In V0.3

* `Inherit()` is now `defaults()`
* `Extend()` is now `defines()`
* `Inherit()` on entities is now `def()`
* `Extend()` on entities is now `attr()`

### Short getters and setters

  var tile = re.e('tile');
  tile.tileX(1); //sets
  tile.tileX(); //gets

Setters can even be used in `attr()`

  tile.attr('tileX', 2); //sets
  
### Signals Changed to on/off

* `addSignal()` is now `on()`
* `removeSignal()` is now `off()`
* `signal()` is now `trigger()`

## Quick Start Guide
First you should install [ruby](http://rubyinstaller.org/) and install the entityjs gem. In the command prompt type in:
`gem install entityjs`

Now you can create a new game, type in `entityjs new mygame`. This will create a game using the default template.

Move into the mygame/ directory and type in `entityjs server`.

Open your browser and navigate to `localhost:2345`.