# Next Level Week 2 - Proffy

This is a web application developed at NLW 2. NLW is an online event with lots of code, challenges, networking, and a single goal: Advancing to the next level.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Proffy is an online study platform that helps people find professors online.

Users should be able to:

- View the optimal layout of the site, depending on the screen size of your device
- View the float states for all interactive elements on the page
- If the user is a proffy, he can register a class by entering basic data such as name, profile picture, phone number, bio, subject, class cost, day(s) of the week, and time(s)
- If the user is a student, he can search for a registered lesson by filtering by subject, day of the week and time
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. 


### Screenshot

![](./public/images/design/screenshot.png)

### Links

- Project Layout: [https://www.figma.com/file/GQNQIlm59RYOtD5JaQt9Fy/Proffy-Web?node-id=0%3A1](https://www.figma.com/file/GQNQIlm59RYOtD5JaQt9Fy/Proffy-Web?node-id=0%3A1)
- Live Site URL: []()

## My process

### Built with

- Mobile first
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid Layout
- JavaScript
- Node.js
- Express
- SQLite
- Nunjucks

### What I learned

In this project I learned how to do form validations with pure css, which is amazing because it's so easy to implement. I also revisited some pseudo-elements concepts in css, more precisely the after and before pseudo-elements that I haven't worked with for a long time, in this case I used them to add the validation icons. Besides these new learned properties, in this project I used the Animation.css library to make some animations when loading the page, I was surprised with how easy it is to add this library to my project, this library offers a series of animations with pure css. Below, I'll leave the main CSS properties I learned when doing validations and how I used the Animation.css library in my project.

HTML property to do validations (required)
```html
<input type="text" placeholder="First Name" required>
```

After and before pseudo-elements to add validation icons
```css
.cta form .validity-icon::after {
  content: url(../images/icon-checkmark.svg);
  position: absolute;
  right: 22px;
  top: 15px;
  z-index: 999;
  opacity: 0;
}

.cta form .validity-icon::before {
  content: url(../images/icon-error.svg);
  position: absolute;
  right: 22px;
  top: 15px;
  z-index: 999;
  opacity: 0;
}
```

CSS properties for validations (:valid and :invalid)
```css

.cta input:focus:valid {
  border-color: var(--color-green); 
}

.cta input:focus:valid + .validity-icon::after {
  opacity: 1; 
}

.cta input:focus:invalid {
  border-color: var(--color-red); 
}

.cta input:focus:invalid + .validity-icon::before{
  opacity: 1;
}
```

### Continued development

It's been a while since I stopped studying Front-end Development because of university studies, but this week I'm going back to school, I intend to start again, getting back to basics and progressing, that is, I'm going to do many projects this year for my improvement in the area.

### Useful resources

- [Animation.css](https://animate.style) - This is the link to the Animation.css library website
- [Valid property](https://css-tricks.com/almanac/selectors/v/valid/) - Here is the link that talks a little about the pseudo-element :valid

## Author

- Codewars - [Ezequiel Santos](https://www.codewars.com/users/Ezequiel%20Santos)
- Frontend Mentor - [@ezequielsan](https://www.frontendmentor.io/profile/ezequielsan)
