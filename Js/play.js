function play()
{
    var musicOn = document.getElementById('music');
    var musicOff = document.getElementById('musicoff');
    var audio = document.getElementById('audio');
    document.getElementById('cd').classList.toggle('active');
    audio.play();
    musicOn.style.display="flex";
    musicOff.style.display="none";

}
function pause()
{
    var musicOn = document.getElementById('music');
    var musicOff = document.getElementById('musicoff');
    var audio = document.getElementById('audio');
    document.getElementById('cd').classList.toggle('active');
    audio.pause();
    musicOn.style.display="none";
    musicOff.style.display="flex";

}