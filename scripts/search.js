var currentPage = 1;
var entriesPerPage = 5;
var input = document.getElementById("input");
// list of all entries that match the search term
var shownListElements = Array.prototype.slice.call(document.getElementsByClassName("box"));
updateShownElements();
changePage(1);

/*
  Whenever the search term changes, this function is called
  Compares the search term to each of the entries of the list
  The non-matching entries are hidden
*/
input.onkeyup = function () {
  shownListElements = []
  // gets all list elements
  var reviews = document.getElementsByClassName("box");
  for (var i = 0; i < reviews.length; i++) {
    var name = reviews[i].getElementsByClassName("reviewTitle")[0].innerHTML + reviews[i].getElementsByClassName("reviewPreview")[0].innerHTML;
    // if the list entry matches the search term
    if (name.toLowerCase().indexOf(input.value.toLowerCase()) > -1) {
      shownListElements.push(reviews[i]); 
      reviews[i].style.display = "inherit";
    } else {
      reviews[i].style.display = "none";
    }
  }
  updateShownElements();
}

/*
  Whenever  the search entry or the page is changed, this function is called
  Makes sure that the correct entries are shown corresponding to the
  current search term and page number
*/
function updateShownElements() {
  arrows = document.getElementsByClassName("arrows");
  // if there is less than a page worth of entries, hide arrows
  if (shownListElements.length < 6) {
    for (var i = 0; i < arrows.length; i++) {
      arrows[i].style.visibility = "hidden";
    }
  // if there is more than a page worth of entries, show arrows
  } else {
    for (var i = 0; i < arrows.length; i++) {
      arrows[i].style.visibility = "visible";
    }
  }
  // if current page has no entries, go to last page with entries
  // also checks that total entries is not 0 so that it does not go to page 0
  if (currentPage > Math.ceil(shownListElements.length / entriesPerPage) && shownListElements.length != 0) {
    changePage(Math.ceil(shownListElements.length / entriesPerPage));
  }
  // if on first page, hide left arrow
  if (currentPage == 1) {
    arrows[0].style.visibility = "hidden";
  // if on last page, hide right arrow
  } else if (currentPage == Math.ceil(shownListElements.length / entriesPerPage)) {
    arrows[2].style.visibility = "hidden";
  }
  for (var i = 0; i < shownListElements.length; i++) {
    // if the current element in the loop is not to be shown on the current page
    if (i >= currentPage * entriesPerPage || i < (currentPage - 1) * entriesPerPage) {
      shownListElements[i].style.display = "none";
    } else {
      shownListElements[i].style.display = "inherit";
    }
  }
}

/*
  Changes the current page
*/
function changePage(page) {
  currentPage = page;
  totalPages = Math.ceil(shownListElements.length / entriesPerPage);
  updateShownElements();
  document.getElementById("pageNumber").innerHTML = currentPage + " / " + totalPages;
}
