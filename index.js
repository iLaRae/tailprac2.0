fetch("nav.html")
          .then(response => response.text())
          .then(html => {
            document.getElementById("navbar").innerHTML = html;
          })
          .catch(error => console.error('Error fetching the page:', error));


          fetch("video.html")
          .then(response => response.text())
          .then(html => {
            document.getElementById("video").innerHTML = html;
          })
          .catch(error => console.error('Error fetching the page:', error));


          fetch("Product1.html")
          .then(response => response.text())
          .then(html => {
            document.getElementById("productgrid").innerHTML = html;
          })
          .catch(error => console.error('Error fetching the page:', error));


          fetch("background.html")
          .then(response => response.text())
          .then(html => {
            document.getElementById("bkgrd").innerHTML = html;
          })
          .catch(error => console.error('Error fetching the page:', error));

          fetch("giantcard.html")
          .then(response => response.text())
          .then(html => {
            document.getElementById("gt-card").innerHTML = html;
          })
          .catch(error => console.error('Error fetching the page:', error));


          fetch("button.html")
          .then(response => response.text())
          .then(html => {
            document.getElementById("i-have").innerHTML = html;
          })
          .catch(error => console.error('Error fetching the page:', error));


          fetch("test.html")
          .then(response => response.text())
          .then(html => {
            document.getElementById("cards").innerHTML = html;
          })
          .catch(error => console.error('Error fetching the page:', error));