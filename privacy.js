var phoneNode = document.getElementById('phone')
var emailNode = document.getElementById('email')

if (window) {
  phoneNode.innerHTML = "+32478811015"
  emailNode.innerHTML = "info@lalicorne.net"
  emailNode.href = "mailto:info@lalicorne.net"
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    phoneNode.href = "tel:+32478811015"
  }
}
