import Journal from './journaling';
import './css/styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
  });
});