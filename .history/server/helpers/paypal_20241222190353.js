const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AVpzGrwiO-BggKoWpo81KEZF9BD2F87J3kYAYBOLcfyXSlvVMtzc5G0i3Mf3EhOv2ttTU41GFzTZzyPq",
  client_secret: "",
});

module.exports = paypal;