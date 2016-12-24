# HackReader

> The official code base for the HackReader application

## About

HackReader is a mobile client for reading the HackerNews. It takes data from the legacy HackerNews API, for future updates the goal is to migrate to the new Firebase HN API.

## Installing

HackReader is developed using the Ionic framework - if you are unfimilar it allows you to develop mobile applications using web technologies such as Angular JS. Before testing the software make sure you have the following installed:

#### Dependencies

* Ionic
* Angular JS
* Node

Once you have the dependencies, make sure you build the app and run it using `ionic serve`. This will open up a test browser window so scale it down to mobile dimensions. When you want to export the code as an `.apk` file for your device run `ionic build`.

## TODO

* Implement view page :check:
* Style view page
* Add comments :check:
* Sort comments and add replies to the parent comment(s)
* Add icons to nav
* Open link in app browser :check:
* Add settings such as change theme, number of queries, etc.
* Add gestures for opening links and posts
