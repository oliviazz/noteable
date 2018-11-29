// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import axios from 'axios'
'use strict';
var cur_url = ""
    // let changeColor = document.getElementById('changeColor');

// let sButton = document.getElementById('submitButton');

// chrome.storage.sync.get('color', function(data) {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         chrome.tabs.executeScript(
//             tabs[0].id, { code: 'document.body.style.backgroundColor = "' + color + '";' });
//     });
// };

// sButton.onclick = function(element) {
//     alert('hi!!!');
// }
chrome.tabs.query({ 'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT },
    function(tabs) {
        cur_url = tabs[0].url;
    }
);

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('submitButton');
    // onClick's logic below:
    link.addEventListener('click', function() {
        alert(cur_url)
    });
});