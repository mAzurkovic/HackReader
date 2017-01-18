# HackReader

> The official code base for the HackReader application

Version 1.1 - [View in the Play Store](https://play.google.com/store/apps/details?id=com.ionicframework.hackernewsreader296388)

## About

HackReader is a mobile client for reading the HackerNews. It takes data from the legacy HackerNews API, for future updates the goal is to migrate to the new Firebase HN API.

## Installing

HackReader is developed using the Ionic framework - if you are unfimilar it allows you to develop mobile applications using web technologies such as Angular JS. Before testing the software make sure you have the following installed:

#### Dependencies

* Ionic 2
* Angular JS
* Node JS

Once you have the dependencies, make sure you build the app and run it using `ionic serve`. This will open up a test browser window so scale it down to mobile dimensions. When you want to export the code as an `.apk` file for your device run `ionic build`.

> Note: Remeber to add the platform using `ionic platform add <platform>` (`android` or `ios`)

## APIs Used:
* [HN Angolia Search API]() - Used for the New, Ask and Show pages. Aswell as the bookmark pages for some posts.
* [FireBase Official HN API]() - Used for getting post/user/comment IDs
* [Unofficial HN API]() - Used for the view pages to get all comments

## TODO

* Implement view page :small_blue_diamond:
* Style view page :small_blue_diamond:
* Add comments :small_blue_diamond:
* Sort comments and add replies to the parent comment(s) :small_blue_diamond:
* Add icons to nav :small_blue_diamond:
* Open link in app browser :small_blue_diamond:
* Add settings such as change theme, number of queries, etc.
* Add gestures for opening links and posts :small_blue_diamond:
* Statusbar color :small_blue_diamond:
* User profiles
* Search capability :small_blue_diamond:
* Add share post to Facebook, etc. :small_blue_diamond:
* Parse and format `html` tags in comments and posts from JSON return :small_blue_diamond:
* Expandable comments
* Add refresh option :small_blue_diamond:
* View user from view-page option :small_blue_diamond:
* Make custom browser?
* Load more posts to pages
* Bookmarking posts :small_blue_diamond:
* Open posts in Hacker News :small_blue_diamond:
* View user who commented quick option :small_blue_diamond:
