<!DOCTYPE html>
<html>
<title>Compliment Machine</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif}
.w3-navbar,h1,button {font-family: "Montserrat", sans-serif}
.fa-anchor,.fa-coffee {font-size:200px}
</style>
<script src="/static/js/dropzone.js"></script>
<script>
Dropzone.options.myAwesomeDropzone = {
  success: function(file, response){
      document.location.href = "/data?image="+response;
  },
  url: "/upload",
  paramName: "artifact", // The name that will be used to transfer the file
  maxFilesize: 2, // MB
  dictDefaultMessage: "",
  accept: function(file, done) {
    console.log(file.name)
     done();
  }
};
</script>
<body>

<!-- Navbar -->
<div class="w3-top">


  <!-- Navbar on small screens -->
  <div id="navDemo" class="w3-hide w3-hide-large w3-hide-medium">
    <ul class="w3-navbar w3-left-align w3-large w3-black">

    </ul>
  </div>
</div>

<!-- Header -->
<header class="w3-container w3-red w3-center  w3-padding-128">
  <h1 class="w3-margin  w3-hide-small w3-jumbo">Compliment Machine</h1>
  <h1 class="w3-margin  w3-hide-large w3-hide-medium">Compliment Machine</h1>

  <!-- <button class="w3-btn w3-round-large w3-grey w3-padding-16 w3-large w3-margin-top" onclick="upload()">
       Upload A Photo</button>-->
    <button id="my-awesome-dropzone" class="dropzone w3-btn w3-round-large w3-grey w3-padding-16 w3-large w3-margin-top">
      Upload A Photo</button>


</header>

<!-- First Grid -->
<div class="w3-row-padding w3-padding-64 w3-container">
  <div class="w3-content">
    <div class="w3-twothird">
      <h1>Machine Learning Driven Compliments</h1>
      <h5 class="w3-padding-32"> By combining Clarifai API and Natural Language Toolkit we have perfected a machine learning solution to the world most pressing question: "How does this selfie look?"</h5>
    </div>

    <div class="w3-third w3-center w3-">
      <img src = "/static/img/cam.png">
    </div>
  </div>
</div>

<!-- Second Grid -->



<!-- Footer -->
<footer class="w3-container w3-padding-64 w3-center w3-opacity">


</footer>

<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
<script>
// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
</script>

</body>
</html>
