// Copyright (c) 2022 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: Dec 2022
// This file contains the JS functions for index.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-6-02-JS/sw.js", {
    scope: "/ICS20-6-02-JS/",
  })
}

/**
 * Input
 */
function myButtonClicked() {
  if (localStorage.updateCookieCount) {
    localStorage.updateCookieCount = Number(localStorage.updateCookieCount) + 1
  } else {
    localStorage.updateCookieCount = +1
  }
  document.getElementById("answer").innerHTML =
    "You have " + localStorage.updateCookieCount + " cookie(s)"
}
