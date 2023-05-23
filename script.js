function toggleSearchBar() {
    var searchInput = document.getElementById('search-input');
    searchInput.classList.toggle('expanded');
  }
  const bar = document.getElementById('bar');
  const nav = document.getElementById('navbar');
  
   if(bar){
    bar.addEventListener('click',()=> {
      nav.classList.add('active'); 
    })
   }
   window.onload = function() {
    var motionText = document.getElementById('motion-text');
    motionText.addEventListener('mouseover', function() {
      this.classList.add('animated');
    });
  
    motionText.addEventListener('mouseout', function() {
      this.classList.remove('animated');
    });
  };
  
