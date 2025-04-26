function openDrawer() {
          document.getElementById("myDrawer").style.width = "250px";
        }
function closeDrawer() {
          document.getElementById("myDrawer").style.width = "0";

        }
function toggleTasks() {
          var x = document.getElementById("tasklist");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
        }
function toggleSettings() {
            var x = document.getElementById("settinglist");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
function toggleAbout() {
            var x = document.getElementById("aboutlist");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
        