# Toronto Tourism Office (Description)
 
## UX

## Features

### Existing Features
- Responsive navigation bar - Allow the user to jump directly between sections (not fully implemented yet).
- Contact form - Allow the users interested to request more information filling the form.

### Future Features
- Modal window that would appear clicking on every column of the "What to do" section with extended information.

## Typography and Color Scheme

1. Typography:
    1. Fira Sans, [Google fonts, Fira Sans](https://fonts.google.com/specimen/Fira+Sans?selection.family=Roboto:400,700)
    2. Permanent Marker, [Google fonts, Permanent Marker](https://fonts.google.com/specimen/Permanent+Marker?selection.family=Roboto:400,700)
    3. Varela Round, [Google fonts, Varela Round](https://fonts.google.com/specimen/Varela+Round?selection.family=Roboto:400,700)

## Wireframes

The wireframes for the project can be found [here](https://github.com/ED-IP/Milestone-2-Project/blob/master/docs/Wireframe_milestone_2.png)

## Technologies Used

- **[HTML]**
	- **HTML** is used to create the structure of the web-page and to add content.
	
- **[CSS]**
	- **CSS** is used to provide styles for the web-page.

- **[JS]**
    - **JavaScript** used to make some of the element act when the mouse is over them.

- **[Bootstrap](https://getbootstrap.com/)**
    - The project uses **Bootstrap** to implement a responsive navigation bar, help with the layout of some elements and provide classes for styles.

- **[Font Awesome](https://fontawesome.com/)**
	- **Font Awesome** is used to provide font icons in the shape of social networks.

- **[jQuery](https://jquery.com/)**
	- **jQuery** is used to add some visual interactive elements that react to the mouse cursor.
	
- **[Google Fonts](https://fonts.google.com/)**
	- The page use several fonts for text from **Google Fonts** service.

## To do / Incomplete features

 - Change styles for the Navigation bar and footer
 - Try different colors for the pages, contact form
 - Make the contact form modal and that it refresh when one is sent
 - Replace the "Lorem" text with the definitive one
 - Center the button to close the Privacy page

## Testing

1. The HTML and CSS code were tested with [CSS Validation Service](https://jigsaw.w3.org/css-validator/), [Markup Validation Service](https://validator.w3.org/) and [JSHint](https://jshint.com/).
   Any error found during testing has been addressed, following tests mark the code as okay.
  
2. During development the site has been checked in a regular basis with the developer tools of the browser to ensure that it worked as intended in desktop and mobile environments.

3. The site has been tested with the browsers Brave and Firefox (Desktop).

4. The site has been tested on a Galaxy A8 (2018) with the browsers Brave (1.8.112) and Firefox Focus (8.3.0).

5. Navigation bar:
	1. Desktop version, try to click in any option to verify that the page scrolls to the right section.
	2. Mobile version, verify that the navigation bar options gets collapsed when the size of the screen is reduced.
	3. Mobile version, verify that the menu options had the same behaviour that in desktop mode.
	4. Mobile version, verify that the menu open/close correctly when is push.

6. Contact form:
	1. Test: Not filling one or more of the required shows an error message asking the user to fill the field.
	2. Test: Not ticking the acknowledge for the privacy policy shows an error message.
	3. Test: Trying to submit with an incorrect email address shows an error message asking the user to fill the field with the right content.
    4. Test: Send a message to check that the integration with emailjs is functional.

### Bugs

- The navigation bar is not functional when used with small screen sizes.
- Images on the "What to do section" scales from the top left corner rather than the center of the image.
- When the site is visualized on small screen devices the elements on the "What to do section" doesn't align correctly.


## Deployment

To deploy the project I have used GitHub Pages. 
To deploy the project from the page for the repository: 
  1. Click on the settings tab.
  2. Go to the "Pages" section.
  3. On the Sources section, select the Master branch.

The address for the deployed project is: https://ed-ip.github.io/Milestone-2-Project/


## Credits

### Javascript

 - The code used for opening and closing the Privacy Policy window was found in the following thread on [Stackoverflow](https://stackoverflow.com/a/24659694)

### Content

- The Term of Use and Privacy Policy text is from an archived version of [placeholder.com](https://web.archive.org/web/20200216231943/https://placeholder.com/about/privacy/#content)
- All the rest of text is original, and no real personal information has been used.

### Media

- Image for the Introduction section by:
	- [James Wheeler](https://www.pexels.com/photo/buildings-near-body-of-water-at-night-1519088/)
	
- Images for the "What to do" section:
	- [vjgalaxy](https://www.pexels.com/photo/white-boat-on-sea-5054143/)
    - [Gerald Jake Abangan](https://www.pexels.com/photo/plate-of-barbeques-on-dining-table-2689419/)
    - [Cameron Casey](https://www.pexels.com/photo/people-on-sidewalk-selective-focal-photo-1687093/)
    - [Chris Munnik](https://www.pexels.com/photo/blue-train-2536178/)
    - [Gary Barnes](https://www.pexels.com/photo/man-with-strong-fragrant-coffee-in-hands-6248740/)

	
- Toronto flag images:
	- [Wikipedia](https://en.wikipedia.org/wiki/Toronto#/media/File:Flag_of_Toronto,_Canada.svg)