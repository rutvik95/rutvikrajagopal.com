/*
    Rutvik Rajagopal's Personal Website

    Copyright (C) 2014 Rutvik Rajagopal

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/
var main = function() {
  /*open Menu */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Close Menu  */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);
      

    $('body').animate({
      left: "0px"
    }, 200);
  });
};


$(document).ready(main);
