
console.log(1)
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
})