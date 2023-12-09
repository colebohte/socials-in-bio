
window.onload = function() {
    togglediv('socials');
    togglediv('projects');
  };

function togglediv(id) {
    var div = document.getElementById(id);
    div.style.display = div.style.display == "none" ? "block" : "none";
}
