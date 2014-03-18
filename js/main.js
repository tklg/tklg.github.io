showBtns = function() {
    setTimeout(function(){
        $('.btn').removeClass('hidden');
        $('.btn').addClass('btn-visible')
    }, 3600);
}

scrollTo = function(section) {
    colorIncBlankUpdate(section);
    $(".main").moveTo(section);
}

var colorNumber = 1;

colorIncDown = function() {
    $('.wrapper').removeClass('wrapper-color-1 wrapper-color-2 wrapper-color-3 wrapper-color-4 wrapper-color-5 wrapper-color-6');
    colorNumber++;

    if (colorNumber === 1) {
        $('.wrapper').addClass('wrapper-color-1');
    } else if (colorNumber === 2) {
        $('.wrapper').addClass('wrapper-color-2');
    } else if (colorNumber === 3) {
        $('.wrapper').addClass('wrapper-color-3');
    } else if (colorNumber === 4) {
        $('.wrapper').addClass('wrapper-color-4');
    } else if (colorNumber === 5) {
        $('.wrapper').addClass('wrapper-color-5');
    } else if (colorNumber === 6) {
        $('.wrapper').addClass('wrapper-color-6');
    } else if (colorNumber === 7) {
        colorNumber = 1;
        $('.wrapper').addClass('wrapper-color-1');
    }
}

colorIncUp = function() {
    $('.wrapper').removeClass('wrapper-color-1 wrapper-color-2 wrapper-color-3 wrapper-color-4 wrapper-color-5 wrapper-color-6');
    colorNumber--;

    if (colorNumber === 1) {
        $('.wrapper').addClass('wrapper-color-1');
    } else if (colorNumber === 2) {
        $('.wrapper').addClass('wrapper-color-2');
    } else if (colorNumber === 3) {
        $('.wrapper').addClass('wrapper-color-3');
    } else if (colorNumber === 4) {
        $('.wrapper').addClass('wrapper-color-4');
    } else if (colorNumber === 5) {
        $('.wrapper').addClass('wrapper-color-5');
    } else if (colorNumber === 6) {
        $('.wrapper').addClass('wrapper-color-6');
    } else if (colorNumber === 0) {
        colorNumber = 6;
        $('.wrapper').addClass('wrapper-color-5');
    }
}

colorIncBlankUpdate = function(newNumber) {
    colorNumber = newNumber;
    $('.wrapper').removeClass('wrapper-color-1 wrapper-color-2 wrapper-color-3 wrapper-color-4 wrapper-color-5 wrapper-color-6');

    if (colorNumber === 1) {
        $('.wrapper').addClass('wrapper-color-1');
    } else if (colorNumber === 2) {
        $('.wrapper').addClass('wrapper-color-2');
    } else if (colorNumber === 3) {
        $('.wrapper').addClass('wrapper-color-3');
    } else if (colorNumber === 4) {
        $('.wrapper').addClass('wrapper-color-4');
    } else if (colorNumber === 5) {
        $('.wrapper').addClass('wrapper-color-5');
    } else if (colorNumber === 6) {
        $('.wrapper').addClass('wrapper-color-6');
    }
}