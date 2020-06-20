if(typeof getScreenshot === 'undefined') {
    function getScreenshot () {
        let videoElement = document.querySelector('video');

        let canvas = document.createElement('canvas');
        canvas.width = videoElement.width;
        canvas.height = videoElement.height;

        canvas
        .getContext('2d')
        .drawImage(videoElement, 0, 0, canvas.width, canvas.height);

        return canvas.toDataURL('image/png');
    }

    function base64ToBlob(code) {
        let parts = code.split(';base64,');
        let contentType = parts[0].split(':')[1];
        let raw = window.atob(parts[1]);
        let rawlength = raw.length;
        let uInt8Array = new Uint8Array(rawlength);

        for(let i = 0; i < rawlength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }

        return new Blob([uInt8Array], { type: contentType });
    }

    function downloadFile(filename, content) {
        let alink = document.createElement('a');
        let blob = base64ToBlob(content);
        let evt = document.createEvent('HTMLevents');
        evt.initEvent('click', true, true);

        alink.download = filename;
        alink.href = URL.createObjectURL(blob);
        alink.click();
    }
}

if(typeof img === 'undefined' ) {
    let img = document.createElement('img');
    img.setAttribute('src', getScreenshot());

    img.setAttribute(
        'style',
        'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index:2'
    );

    img.addEventListener('click', function() {
        downloadFile('shot1.png', this.src);
    });

    document.body.appendChild(img);
} else {
    if(img.style.display === '' || img.style.display === 'block') {
        img.setAttribute('src', getScreenshot());
        img.style.display = 'block';
    }
}

void 0;