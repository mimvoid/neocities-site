function loadScript(url) {    
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  head.appendChild(script);
}

loadScript('/_parts/header.js');
loadScript('/_parts/sidebar.js');
loadScript('/_parts/footer.js');
