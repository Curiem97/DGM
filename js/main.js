var info = [{
    "events" : {
        "events1" : {
            "img" : "assets/img/eventos1.jpg",
            "caption" : "Caldas da Rainha 21/09 a 05/10 Exposições das intrepertações da natureza."
        },
        "events2" : {
            "img"     : "assets/img/eventos2.jpg",
            "caption" : "Pedrógão pequeno 08/11/19 encontro nacional de estudantes de cultura e eventos."
        },
        "events3" : {
            "img"     : "assets/img/eventos3.jpg",
            "caption" : "Caldas da rainha 25/11/2019 conferência e conversa com cecília costa."
        }
    },
    "artist" : {
        "artist1" : "assets/img/artistadasemana1.jpg",
        "artist2" : "assets/img/artistadasemana2.jpg"
    },
    "works" : {
        "work1" : {
            "img"     : "assets/img/trabalhos2.jpg",
            "caption" : "Maria Fernandes 2º ano design gráfico trabalho feito para projeto design gráfico I."
        }, 
        "work2" : { 
            "img"     : "assets/img/trabalhos1.jpg",
            "caption" : "Ricardo Lisa 1º ano dgm trabalho feito para projeto comunicação I."
        }
    }
}];
$(function() {

    $('#arrow, #arrow img').click(function(){
        $('html, body').animate({
            scrollTop: $('#events').offset().top - 100
        }, 1000);
    })

    $('nav a').click(function() {
        var rel = $(this).attr('rel');
        if ($(this).attr('rel') == '#') {
            rel = 'html';
        }
        $('html, body').animate({
            scrollTop: $(rel).offset().top - 100
        }, 1000)
    });

    $('input[type="radio"]').click(function() {
        var type = $(this).attr('data-type');

        switch(type) {
            case 'events':
                var events = info[0][type],
                event = $(this).attr('data-event');
                $('#events__img').attr('src', events[event]['img']);
                $('#events__caption').text(events[event]['caption']);
                break;
            case 'artist':
                var artists = info[0][type],
                artist = $(this).attr('data-artist');
                $('.artist__img').attr('src', artists[artist])
                break;
            case 'works':
                var works = info[0][type],
                    work = $(this).attr('data-work');
                $('#works__img').attr('src', works[work]['img']);
                $('#works__caption').text(works[work]['caption']);   
                break;
        }
    })

});