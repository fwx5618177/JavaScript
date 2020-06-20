if(document.querySelector('#audio_fwx') === null) {

    let text_fwx_selected = window.getSelection().toString().replace(/(^\s+|\s+$)/, '');

    if (text_fwx_selected !== '') {
        let audio_fwx = document.createElement('audio');
        audio_fwx.setAttribute('autoplay', '');
        audio_fwx.setAttribute('name', 'media');
        audio_fwx.setAttribute('id', 'audio_fwx');

        audio_fwx.addEventListener('ended', function () {
            text_fwx_selected = null;
            this.remove();
        });

        let audio_fwx_source = document.createElement('source');
        audio_fwx_source.setAttribute('type', 'audio/mpeg');
        tts_url = 'http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=4&text=';
        audio_fwx_source.src = tts_url + text_fwx_selected;

        audio_fwx.appendChild(audio_fwx_source);
        document.body.appendChild(audio_fwx);
    }

}