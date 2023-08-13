# Social Network API

## Description

This project was created because I wanted to create an API to save users, thoughts and reactions on to a server.
What this does is it uses a mongoDB server to store users thoughts and reactions.
What I learned from project was how to use mongoDB as a database, how to create virtuals and getter functions and how mongodb works.

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)

[Badge](#badge)

[Contribute](#contribute)

[Test](#test)

[Questions](#questions)

## Installation

type "npm install mongoose" in the terminal to use a mongodb database

## Usage

to use this project you will perform a different fetch requests on the site you are using this API on or use insonmia to view them. If you are using insomnia use http://localhost:3001/api/ to view requests. For the user requests you will follow that with users/ where you can perform a get or post request. A get request will give you all of the users and a post request will create a new user. If you follow users/ with a user id, you will be able to perform a get request to get a single user, perform a put request to update a user, or delete request to delete a user. If you follow a user id with /friends/ and another id you can perform a post request to add a friend or a delete request to remove a friend for that user. If instead of using users/ you use thoughts/ it will take you to thoughts routes. here you can do a get request to get all thoughts or a post request to create a thought. If you follow it with a thought Id you can perform a get request to get a single thought or delete request to delete a thought. If you follow the thought id with /reactions/ you will be able to post request to add a reaction. If you follow that with a reaction Id you will be able to delete request to delete a reaction.
Video Demonstration: https://drive.google.com/file/d/1jLYg9QrZ4HaDGQR7sHlKeN6eBkuWX2zG/view

## Credits

N/A

## License

Copyright (C) 2023 Elenilson Hernandez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Badge

![License](https://img.shields.io/badge/License-MIT-green)

## Contribute

There is currently no way to contribute.

## Test

There is currently no way to test this project.

## Questions

If you have any questions you can reach me at elenilson.hernandez1213@gmail.com or my Github account, https://github.com/EHernandez1213
