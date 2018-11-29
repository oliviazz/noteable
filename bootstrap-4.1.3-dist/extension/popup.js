// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

require('axios');
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
    alert(cur_url);
    // onClick's logic below:
    link.addEventListener('click', function() {
        // snip
        event.preventDefault()
            alert('Submitted ' + cur_url);
            var xhr = new XMLHttpRequest();

			xhr.open("GET", "/api/addArticle", false);
			xhr.send();

			var result = xhr.responseText;
			console.log(result, " RESULT")

            this.props.history.push('/mypage')   

    });
});