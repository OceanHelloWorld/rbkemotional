# Project Title:

Emotional-Notification

## Description:

'Emotional - Notification' web app. in our application we aimed to push a notification at specific time to collect some information from the student about their feelings and emotions at that time.
 We need at our organization RBK(Reboot Camp).org to gather some information from the students at some point, 
 Like thier emotions after technical lectures for some reasons, So what we need it just to push 
 A notification at specific time then when they are clicking  on this notification they will get a dialog forms to fill it,
 After submitting we will save those information at our data base.

# Team:
 - Product Owner: @Sarah-Yousef.
 - Scrum Master: @Hananmajali.
 - Development Team Members: @Hanan-majali ,@Sarah-Yousef.

# Table of Contents:

  - Usage
  - Technologies
  - Getting started
     - Prerequisites
  - Development
     - Installing Dependencies.
     - Run Application

# Demo:

[Live-Dome]()  

--------------------------------------------------------------------------------------------------------------------------------------------------------------------    

## Usage:

You do not have to login/signup to use this app. However, without doing so, you will only get a notification at specific time. Once you get a notification, you will fill some information and submit.

## Technologies:

   - Node.js
   - AngularJs
   - Web-API Notification service
   - Mongo-DB(Mongoose)
   - Robo 3T 1.1.1
   - MLab

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

  ### Prerequisites

   What things you need to install software re and how to install them 
   > This link contain the manual contains tutorials on installation of MongoDB. in diffrent platforms (Linux, macOS And Windows), [link](https://docs.mongodb.com/manual/installation/)
   > This link contain the command of installation of nodejs, [link](https://nodejs.org/en/download/package-manager/)

   > then Go to Installing Dependencies part and run those command at your terminal or your bash commander.

## Development:

  Development of this application started on May 5, 2018 and the minimum viable product (MVP) was completed on May 8, 2018. The final application was deployed on Heroku on 26 May, 2018.

 ### Installing Dependencies:

  From inside the repo directory 
  ```
  npm install.
  bower install.
  ```


   
  ### Running Application:

  - [x] clone the repo OR download it.
  - [x] Run your data base mongodDB from your commander
    ```
    mongod
    ```
    

  - [x] From inside the repo directory go to server directory and run
    ```
    node index.js 
    ```
  - [x] open the App in the browser like (chrome browser) at 127.0.0.1:8000  
--------------------------------------------------------------------------------------------------------------------------------------------------------------

# Limitations:
> The web notifications API is not fully supported in all browsers.
> Please see [supported browser versions](https://caniuse.com/#feat=notifications) for more information on the official spec support.

--------------------------------------------------------------------------------------------------------------------------------------------------------------

# API Documentation:

  ### Overview 

The angular-web-notification is an angular service wrapper for the web notifications API.

It is using the simple-web-notification library which provides a simple and easy notification API which works across browsers and provides automatic permission handling.
See [W3 Specification](https://dvcs.w3.org/hg/notifications/raw-file/tip/Overview.html), [simple-web-notification](https://github.com/sagiegurari/simple-web-notification) 
And [Notification-Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/notification) for more information.

 - [x] Angular2 and Up Forangular2andabove,it is recommanded to use the simple-web-notification library directly.
 It provides the same API and it is not dependend on angular.

--------------------------------------------------------------------------------------------------------------------------------------------------------------
```
webNotification ⇒ Object
    The web notification service wraps the HTML 5 Web Notifications API as an angular service.
    See simple-web-notification for more API details.

Kind: global namespace
Returns: Object - The service instance
Ngdoc: service
Author: Sagie Gur-Ari

 webNotification.showNotification([title], [options], [callback])
  Shows the notification based on the provided input.
  The callback invoked will get an error object (in case of an error, null in case of no errors) and a 'hide' function which can be used to hide the notification.

Access: public
```

| Param | Type | Default | Description | 
| --- | --- | --- | --- |
| [title] | String | | The notification title text (defaulted to empty string if null is provided) |
| [options] | Object | | Holds the notification data (web notification API spec for more info) |
| [options.icon] | String | /favicon.ico | The notification icon (defaults to the website favicon.ico) |
| [options.autoClose] | Number | | Auto closes the notification after the provided amount of millies (0 or undefined for no auto close) |
| [options.onClick] | function | | An optional onclick event handler |
| [callback] | ShowNotificationCallback | | Called after the show is handled. |

--------------------------------------------------------------------------------------------------------------------------------------------------------------

# Acknowledgments:
 
> you don’t allow apps to send you push notifications unless they really matter to you.
  > Hanan Majali
 - and your response its really important to us.



























