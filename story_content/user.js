function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6UbuaRefcgz":
        Script1();
        break;
      case "6iEUARTciKU":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="1.mp3";
audio.load();
audio.play();
audio.volume = 0.4;
}

function Script2()
{
  ar audio = document.getElementById('bgSong');
audio.src="1.mp3";
audio.load();
audio.play();
audio.volume = 0.3;
}

