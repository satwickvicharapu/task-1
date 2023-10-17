function submitForm(event) {
    event.preventDefault();

    // Get the user input values
    var nameInput = document.getElementById("Heading");
    var emailInput = document.getElementById("Body");
    var imageInput = document.getElementById("image");
    var videoInput = document.getElementById("video");

    var Heading = nameInput.value;
    var Body = emailInput.value;
    var image = imageInput.value;
    var video = videoInput.value;

    // Open a new tab
    var newTab = window.open();

    // Write the user information in the new tab




    newTab.document.write("<html>");
    newTab.document.write("<head>");
    newTab.document.write("<title>DISPLAY CONTENT</title>");
    newTab.document.write("<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' integrity='sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z' crossorigin='anonymous' />");
    newTab.document.write("<style>");
    newTab.document.write("body {");
    newTab.document.write("  padding: 100px;");
    newTab.document.write("  background : linear-gradient(to right,#eecda3,#ba5370)");
    newTab.document.write("}");
    newTab.document.write("h1 {");
    newTab.document.write("  color: #5C469C;");
    newTab.document.write("  margin-bottom: 10px;");
    newTab.document.write("  margin-left: 420px;");
    newTab.document.write("  font-size : 50px;");
    newTab.document.write("  font-weight : bold");
    newTab.document.write("  justify-content: center;");
    newTab.document.write("  align-items: center;");
    newTab.document.write("}");
    newTab.document.write("p {");
    newTab.document.write("  color: #gray;");
    newTab.document.write("  margin-bottom: 20px;");
    newTab.document.write("  margin-left: 450px;");
    newTab.document.write("  font-size : 30px;");
    newTab.document.write("  font-weight : bold");
    newTab.document.write("  justify-content: center;");
    newTab.document.write("  align-items: center;");
    newTab.document.write("}");
    newTab.document.write("img {");
    newTab.document.write("  max-width: 1000px");
    newTab.document.write("  height: 1000px");
    newTab.document.write("  margin-bottom: 30px;");
    newTab.document.write("  margin-left: 450px;");
    newTab.document.write("  margin-bottom: 50px;");
    newTab.document.write("  justify-content: center;");
    newTab.document.write("  align-items: center;");
    newTab.document.write("}");
    newTab.document.write("video {");
    newTab.document.write("  max-width: 100%;");
    newTab.document.write("  height: auto;");
    newTab.document.write("  margin-bottom: 20px;");
    newTab.document.write("  margin-bottom: 30px;");
    newTab.document.write("  margin-left: 450px;");
    newTab.document.write("  margin-bottom: 50px;");
    newTab.document.write("  justify-content: center;");
    newTab.document.write("  align-items: center;");
    newTab.document.write("}");
    newTab.document.write("</style>");
    newTab.document.write("</head>");
    newTab.document.write("<body>");
    newTab.document.write("<h1>User Information</h1>");
    newTab.document.write("<h1>" + Heading + "</h1>");
    newTab.document.write("<p>" + Body + "</p>");









    

    // Check if an image URL is provided
    if (image) {
      newTab.document.write("<img src='" + image + "'>");
    }

    // Check if a video URL is provided
    if (video) {
      newTab.document.write("<video width='560' height='315' controls>");
      newTab.document.write("<source src='" + video + "' type='video/mp4'>");
      newTab.document.write("</video>");
    }

    
    newTab.document.write("</body>");
    newTab.document.write("</html>");


    // Close the document writing to complete the HTML structure
    newTab.document.close();
  }