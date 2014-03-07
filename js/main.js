$(document).ready(function () {
    $('.wrapper').colorScroll({
    colors: [{
        color: '#151b54',
        position: '0%'
    }, {
        color: '#4b0082',
        position: '40%'
    }, {
        color: '#254117',
        position: '80%'
    }]
});
});

scrollTo = function(section) {
    if (section === 2) {
        $(".main").moveTo(2)
    } else {
        $(".main").moveTo(3)
    }
}
