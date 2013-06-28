/**
 * blocks everything except chat
 */
function onlyChat() {
  try {
    document.getElementById("pagelet_bluebar").innerHTML="";
  } catch(err) { }
  try {
    document.getElementById("content").innerHTML="";
  } catch (err) { }
  try {
    document.getElementById("sidebar_navigation_top").innerHTML="";
  } catch (err) { }
  try {
    document.getElementById("pageTitle").innerHTML="Facebook";
  } catch (err) { }
  console.log("All content has been removed.");
}

onlyChat();
