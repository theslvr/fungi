var mainBlock = document.getElementById('main')
var mainTitle = document.getElementById('title')

var buttonTextFirst = document.getElementById('buttonTextFirst')
var buttonTextSecond = document.getElementById('buttonTextSecond')


function showMainFirst () {
    var show11 = document.getElementById('s1')
    mainBlock.style.display = 'none';
    mainTitle.style.display = 'none';
    show11.style.display = 'block';
}

function showMainSecond () {
    var show21 = document.getElementById('s2')
    mainBlock.style.display = 'none';
    mainTitle.style.display = 'none';
    show21.style.display = 'block';
}

document.getElementById('s1video').addEventListener('ended', function( evt ) {
    showbtn();
});

document.getElementById('s2video').addEventListener('ended', function( evt ) {
    showbtn2();
});

document.getElementById('s11video').addEventListener('ended', function( evt ) {
    showbtnrepeat('s11');
});
document.getElementById('s12video').addEventListener('ended', function( evt ) {
    showbtnrepeat('s12');
});
document.getElementById('s13video').addEventListener('ended', function( evt ) {
    showbtnrepeat('s13');
});
document.getElementById('s14video').addEventListener('ended', function( evt ) {
    showbtnrepeat('s14');
});
document.getElementById('s15video').addEventListener('ended', function( evt ) {
    showMain('s15');
});

document.getElementById('s21video').addEventListener('ended', function( evt ) {
    showbtn2repeat('s21');
});
document.getElementById('s22video').addEventListener('ended', function( evt ) {
    showbtn2repeat('s22');
});
document.getElementById('s23video').addEventListener('ended', function( evt ) {
    showMain('s23');
});


function showMain (string) {
    var buttonFirst = document.getElementById('buttonFirst')
    var buttonSecond = document.getElementById('buttonSecond')
    var hideVideo = document.getElementById(string)

    hideVideo.style.display = 'none';
    buttonSecond.style.display = 'none';
    buttonFirst.style.display = 'none';

    mainBlock.style.display = 'block';
    mainTitle.style.display = 'block';
}

function showbtn () {
    var buttonFirst = document.getElementById('buttonFirst')
    var hide11 = document.getElementById('s1')

    buttonTextFirst.style.display = 'block';
    hide11.style.display = 'none';
    buttonFirst.style.display = 'grid';
}

function showbtn2 () {
    var buttonSecond = document.getElementById('buttonSecond')
    var hide21 = document.getElementById('s2')

    buttonTextSecond.style.display = 'block';
    hide21.style.display = 'none';
    buttonSecond.style.display = 'grid';
}

function showbtnrepeat (string) {
    var buttonFirst = document.getElementById('buttonFirst')
    var hide11 = document.getElementById(string)

    buttonTextFirst.style.display = 'block';
    hide11.style.display = 'none';
    buttonFirst.style.display = 'grid';
}

function showbtn2repeat (string) {
    var buttonSecond = document.getElementById('buttonSecond')
    var hide21 = document.getElementById(string)

    buttonTextSecond.style.display = 'block';
    hide21.style.display = 'none';
    buttonSecond.style.display = 'grid';
}

function s11video () {
    var buttonFirst = document.getElementById('buttonFirst')
    var show11 = document.getElementById('s11')
    show11.style.display = 'block';
    buttonFirst.style.display = 'none';
    buttonTextFirst.style.display = 'none';
}

function s12video () {
    var buttonFirst = document.getElementById('buttonFirst')
    var show11 = document.getElementById('s12')
    show11.style.display = 'block';
    buttonFirst.style.display = 'none';
    buttonTextFirst.style.display = 'none';
}

function s13video () {
    var buttonFirst = document.getElementById('buttonFirst')
    var show11 = document.getElementById('s13')
    show11.style.display = 'block';
    buttonFirst.style.display = 'none';
    buttonTextFirst.style.display = 'none';
}

function s14video () {
    var buttonFirst = document.getElementById('buttonFirst')
    var show11 = document.getElementById('s14')
    show11.style.display = 'block';
    buttonFirst.style.display = 'none';
    buttonTextFirst.style.display = 'none';
}

function s15video () {
    var buttonFirst = document.getElementById('buttonFirst')
    var show11 = document.getElementById('s15')
    show11.style.display = 'block';
    buttonFirst.style.display = 'none';
    buttonTextFirst.style.display = 'none';
}

function s21video () {
    var buttonFirst = document.getElementById('buttonSecond')
    var show11 = document.getElementById('s21')
    show11.style.display = 'block';
    buttonFirst.style.display = 'none';
    buttonTextSecond.style.display = 'none';
}

function s22video () {
    var buttonFirst = document.getElementById('buttonSecond')
    var show11 = document.getElementById('s22')
    show11.style.display = 'block';
    buttonFirst.style.display = 'none';
    buttonTextSecond.style.display = 'none';
}

function s23video () {
    var buttonFirst = document.getElementById('buttonSecond')
    var show11 = document.getElementById('s23')
    show11.style.display = 'block';
    buttonFirst.style.display = 'none';
    buttonTextSecond.style.display = 'none';
}
