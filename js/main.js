const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//Listen for the tab
tabItems.forEach((item) => item.addEventListener("click", selectItem));

// Selcet the tab content item

function selectItem(e) {
  removeBorder();
  removeShow();
  //Add border to current tab
  this.classList.add("tab-border");

  //grap content item from the DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

//removing the border of all tabs
function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

//removing the show class of all tabs
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
