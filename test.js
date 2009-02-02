var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  var link = links[i];
  var a = [ 'http://localhost:4567/' ]
  if (link.href.charAt(0) == '/') { a.push(location.host); }
  a.push(link.href);
  href = a.join('');
  link.setAttribute("href", href);
}