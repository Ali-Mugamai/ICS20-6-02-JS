// Copyright (c) 2020 ali-mugamai All rights reserved
//
// Created by: ali mugamai
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

let cookies = 0
/**
 * This function displays an alert.
 */
function myButtonClicked() {
  cookies = cookies + 1
  document.getElementById("hello-world").innerHTML = cookies
}
