# HackReader

> The official code base for the HackReader application

## About

HackReader is a mobile client for reading the HackerNews. It takes data from the legacy HackerNews API, for future updates the goal is to migrate to the new Firebase HN API.

## Installing

HackReader is developed using the Ionic framework - if you are unfimilar it allows you to develop mobile applications using web technologies such as Angular JS. Before testing the software make sure you have the following installed:

#### Dependencies
s
* Ionic
* Angular JS
* Node

Once you have the dependencies, make sure you build the app and run it using `ionic serve`. This will open up a test browser window so scale it down to mobile dimensions. When you want to export the code as an `.apk` file for your device run `ionic build`.

## TODO

* Implement view page :small_blue_diamond:
* Style view page :small_blue_diamond:
* Add comments :small_blue_diamond:
* Sort comments and add replies to the parent comment(s) :small_blue_diamond:
* Add icons to nav
* Open link in app browser :small_blue_diamond:
* Add settings such as change theme, number of queries, etc.
* Add gestures for opening links and posts
* Statusbar color :small_blue_diamond:
* User profiles
* Search capability
* Add share post to Facebook, etc. :small_blue_diamond:
* Parse and format `html` tags in comments and posts from JSON return :small_blue_diamond:
* Expandable comments
* Add refresh option
* View user from view-page option :small_blue_diamond:
* Make custom browser?
* Load more posts to pages
* Bookmarking posts
* Open posts in Hacker News :small_blue_diamond:
* View user who commented quick option
