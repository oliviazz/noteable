// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

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

// set proxy for chrome extension, re reoute to my backend

document.addEventListener('DOMContentLoaded', function() {
    
    var link = document.getElementById('submitButton');
    var input = document.getElementById('entered_url')
    input.value = cur_url;

    // onClick's logic below:
    link.addEventListener('click', function() {
        alert('different message')
        // snip
        event.preventDefault()
        var entered_url = document.getElementById('entered_url').value

        alert(entered_url)
        proxyurl = "https://cors-anywhere.herokuapp.com/";
        headers = {'x-requested-with': 'XMLHttpRequest', 'Access-Control-Allow-Origin':'*'}

        var url =  'http://127.0.0.1:5000/api/addarticle';
       
        // var params = 'article_url=' + cur_url;

        var http = new XMLHttpRequest();
        //Send the proper header information along with the request
        http.open('POST', url, true)
        http.setRequestHeader('Content-type', 'application/json');
        http.setRequestHeader('x-requested-with', 'XMLHttpRequest');
        http.setRequestHeader('Access-Control-Allow-Origin', '*');
       
        var jsonfile = JSON.stringify({'article_url':entered_url});
        params = 'article_url='+entered_url
        console.log(jsonfile);
 
        // console.log(url+params, "url and params")
        http.send(jsonfile);
        // try{
            

        // }
        // catch(e){
        //     console.log('Error: ', e)
        // }

        http.onreadystatechange = function() { //Call a function when the state changes.
            if (http.readyState == 4 && http.status == 200) {
                console.log('response!')
                console.log(http.responseText);
            }
        }
       

        //this.props.history.push('/mypage')

    });
});