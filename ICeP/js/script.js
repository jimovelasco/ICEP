
//Horizontal Scroll For Speakers
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

//OPEN 1st Speaker
document.getElementById('one').addEventListener('click',
function() {
    document.getElementById('first').style.display = 'flex';
    document.getElementById('detailbtn').style.display = 'flex';
})

//OPEN 2nd Speaker
document.getElementById('two').addEventListener('click',
function() {
    document.getElementById('second').style.display = 'flex';
    document.getElementById('detailbtn').style.display = 'flex';
})

//OPEN 3rd Speaker
document.getElementById('three').addEventListener('click',
function() {
    document.getElementById('third').style.display = 'flex';
    document.getElementById('detailbtn').style.display = 'flex';
})

//Close 1st Speaker
document.getElementById('detailbtn').addEventListener('click',
function() {
    document.getElementById('first').style.display = 'none';
})

//Close 2nd Speaker
document.getElementById('detailbtn').addEventListener('click',
function() {
    document.getElementById('second').style.display = 'none';
})

//Close 3rd Speaker
document.getElementById('detailbtn').addEventListener('click',
function() {
    document.getElementById('third').style.display = 'none';
})


//Close, Close Button
document.getElementById('detailbtn').addEventListener('click',
function() {
    document.getElementById('detailbtn').style.display = 'none';
})