var dns = require("dns"), sys = require('sys');

var str = "abcdefghijklmnopqrstuvwxyz"
var abc = str.split("")

function checkAvailable(name, callback) {
  dns.resolve4(name, function(e, res) {
    if (e) sys.puts(name) 
  })
}

for (var i=0; i<abc.length; i++) {
  for (var j=0; j<abc.length; j++) {
    checkAvailable("lsdafjlasdfj"+abc[i] + abc[j] + ".am", sys.puts);
  }
}

checkAvailable("fb.com")

