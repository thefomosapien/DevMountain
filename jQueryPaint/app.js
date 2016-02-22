 $(document).ready(function () {

     var box = $('.box');

     var color = 'white';

     var colors = 'red blue yellow green white'

     box.on('click', function () {
         $(this).addClass(color);
     })

     box.on('dblclick', function () {
         $(this).removeClass(colors);
     })

     $('#reset').on('click', function () {
         box.removeClass(colors)
     })

     $('#red').on('click', function () {
         color = 'red';
     })

     $('#green').on('click', function () {
         color = 'green';
     })

     $('#yellow').on('click', function () {
         color = 'yellow';
     })

     $('#blue').on('click', function () {
         color = 'blue';
     })






 })