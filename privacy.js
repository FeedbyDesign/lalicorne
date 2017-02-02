var phoneNode = document.getElementById('phone')
var emailNode = document.getElementById('email')
console.log(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
if (window) {
  phoneNode.innerHTML = "+32478811015"
  emailNode.innerHTML = "info@lalicorne.net"
  emailNode.href = "mailto:info@lalicorne.net"
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    console.log("tralala");
    // phoneNode.href = "bbb"
  }
}


// <a href="http://lalicorne.net">lalicorne.net</a> -
// <a id="phone" href="+32478811015">+32478811015</a> -
// <a href="info@lalicorne.net" target="_top">info@lalicorne.net</a>
