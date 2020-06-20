// http://fanyi.youdao.com/openapi.do?keyfrom=<keyfrom>&key=<key>&type=data&doctype=json&version=1.1&q=要翻译的文本
let koe_xhr = null;

if(window.XMLHttpRequest)   koe_xhr = new XMLHttpRequest();

if(window.ActiveXObject)    koe_xhr = new ActiveXObject('Microsoft.XMLHTTP');

if(koe_xhr !== null) {
    koe_xhr.onreadystatechange = function() {
        console.log(koe_xhr.readyState);
        console.log(status);
    }

    koe_xhr.open('GET', '')
}

