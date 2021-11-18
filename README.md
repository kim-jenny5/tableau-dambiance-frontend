# Tableau d'Ambiance

## Background

Tableau d'Ambiance is a picture board SPA (single-padge application), similar to that of VSCO/Tumblr, where users can create "collections," or albums and upload photos onto said collections. Due to the nature of this application, it does not have any secure user authentications (at least at this moment). Therefore, other users are able to see the pictures you upload if they get ahold of your username. On the other hand, this is a great application to share with your friends to create public photo albums to immortalize your memories!

## Tech Stack

My [backend](https://github.com/kim-jenny5/tableau-dambiance-backend) was a Rails API and my frontend was done using vanilla JavaScript and HTML. Active Storage was also configured to handle picture file uploads and Amazon S3 cloud storage was used to handle the storing of the Active Storage attachments.

CSS and Bootstrap was used as well to design the frontend.

## Usage

To view the website live and in action:

- Visit [Tableau d'Ambiance](https://tableau-dambiance.netlify.app/)
- If you prefer viewing a sample account and its images:
  - Click "Returning"
  - Enter "jennyjellybeans" and click continue
- If you'd like to create your account:

  - Click "New"
  - Enter your username--must be unique

**Reminder:**
This application does NOT handle secure user authentication at the moment, as it doesn't require users to create a password. Please continue knowing whatever photos you upload, if any other user were to get ahold of your username, they will be able to access said photos and collections.

## License

MIT License

Copyright (c) 2021 Jenny Kim

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
