function initialize() {
	document.getElementById("sidebar-element-home").style.color = "#6fbf2e";
}

function onClickHome() {
	document.getElementById("iFrameMain").src = "iFramePageHome.html";
	document.getElementById("sidebar-element-home").style.color = "#6fbf2e";
	document.getElementById("sidebar-element-about").style.color = "#c47900";
	document.getElementById("sidebar-element-projects").style.color = "#c47900";
	return;
}

function onClickAbout() {
	document.getElementById("iFrameMain").src = "iFramePageAbout.html";
	document.getElementById("sidebar-element-about").style.color = "#6fbf2e";
	document.getElementById("sidebar-element-projects").style.color = "#c47900";
	document.getElementById("sidebar-element-home").style.color = "#c47900";
	return;
}

function onClickProjects() {
	document.getElementById("iFrameMain").src = "iFramePageProjects.html";
	document.getElementById("sidebar-element-projects").style.color = "#6fbf2e";
	document.getElementById("sidebar-element-about").style.color = "#c47900";
	document.getElementById("sidebar-element-home").style.color = "#c47900";
	return;
}