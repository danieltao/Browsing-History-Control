'use strict';

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('one_click').addEventListener("click", function(){
    chrome.history.deleteAll(function(){
      window.alert("History Successfully Cleared!");
      window.close();
    });
  });
});
