const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AVpzGrwiO-BggKoWpo81KEZF9BD2F87J3kYAYBOLcfyXSlvVMtzc5G0i3Mf3EhOv2ttTU41GFzTZzyPq",
  client_secret: EE_yefYf6sXJ9RDJNDVIJqCWg_cf9Da7Dlfxe6XF6JjWOPZWA-cv_oDuUDgLzVK5MQnoC5R6dnrwl1F9"
});

module.exports = paypal;