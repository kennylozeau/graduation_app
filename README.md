Live site: https://kennylozeau.github.io/graduation_app/

## To add cohort:
- Clone down repo
- Go to a/A name game to get student data file (remove dismissed students)
    - Repo link: https://github.com/appacademy/aa-picture-game
    - If the students in the existing student data file are not from the correct cohort, follow the directions on the README for the `aa-picture-game` repo to get the data for the correct stoods
- Add `<cohort-start-date>.js` file to the `src/students` folder (export as array of student POJOs)
- Change the import in `index.js` to use the new file for the student data
- Update the `h1` in the `index.html` file with the new cohort's title
- Don't forget to webpack it! run `npm run build`
- Push it up! (Wait a few minutes for github pages)
- Have fun!

## Update the student data.
- go to progress.appacademy.io/students
- open dev tools console and run:
```js
let students = [];
$(".classmate-block.block").each(function () {
  const $link = $(this).find("strong a");
  const segments = $link.attr("href").split('/');

  const id = parseInt(segments[segments.length - 1]);
  const name = $link.text();
  const imageUrl = $(this).find("figure img").attr("src");

  student = {id, name, imageUrl, occup: "student"};
  students.push(student);
});
```
- console.log(JSON.stringify(students, undefined, 2));
- Copy the logged text and paste it into data/xxStudents.js. Make sure that you maintain the file's module pattern when you do this.

- Make sure each students' imageUrl begins with http:// (instead of just //)