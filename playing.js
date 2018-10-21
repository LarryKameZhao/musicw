

$(function(){
    $.get('/ly.json').then(function(object){
        let {lrc} = object;
        let {lyric} = lrc;
        let array = lyric.split('\n');
        let regex = /^\[(.+)\](.+)/
        array = array.map(function(string){
            let matches = string.match(regex);
            if (matches){
                return {time:matches[1],words:matches[2]}
            }
            
        })
        let $lyric = $('.lyric')
        array.map(function(object){
            if(!object){return;}
            let $p = $('<p/>');
            $p.attr('data-time',object.time).text(object.words);
            $p.appendTo($lyric.children('.lines'));
        })
    })
    
    function initPlayer(){
        let audio =  document.createElement('audio');
    audio.src = 'https://music164.oss-cn-hangzhou.aliyuncs.com/Songs/%E4%B8%91%E5%85%AB%E6%80%AA.m4a';
    audio.oncanplay = function(){
        audio.play();
        $('.disc-container').addClass('playing');
    }
    $('.icon-pause').on('click',function(){
        audio.pause();
        $('.disc-container').removeClass('playing')
    });
    $('.icon-play1').on('click',function(){
        audio.play();
        $('.disc-container').addClass('playing');
    })
    }
    
})