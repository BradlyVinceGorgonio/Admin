let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{ //Bar iocn'una tıkladığınızda kenar çubuğu açılır
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", ()=>{ //Arama iocn'una tıkladığınızda kenar çubuğu açılır
  sidebar.classList.toggle("open");
  menuBtnChange(); 
});

// kenar çubuğunu değiştirmek için 
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//iocns sınıfının değiştirilmesi
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//iocns sınıfının değiştirilmesi
 }
}