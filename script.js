var fontawesome = document.createElement('link');
fontawesome.rel = "stylesheet";
fontawesome.href = "https://use.fontawesome.com/releases/v5.13.0/css/all.css";
document.getElementsByTagName('head')[0].appendChild(fontawesome);

var ex_fullsc = document.createElement('div');
var js_room_section = document.getElementById("js-room-section");

ex_fullsc.id = "ex_fullsc-div";
ex_fullsc.innerHTML = `
  <input id="ex-fullsc-check" type="checkbox" value="off" class="ex-fullsc">
  <label id="ex-fullsc-label" for="ex-fullsc-check" class="ex-fullsc">
  </label>
  <div class="ex-hukidashi">近日実装！</div>
  <a id="ex-help" href="https://twitter.com" target="_blank"></a>
`;

js_room_section.appendChild(ex_fullsc);
