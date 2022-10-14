var row = document.querySelectorAll(".row");
var circle = document.querySelectorAll(".circle");
console.log(circle);

circle.forEach((val) => {
  val.addEventListener("click", () => {
    row.forEach((elm) => {
      elm.addEventListener("click", function (dets) {
        console.log(dets.target);
        elm.style.width = "180px";
        setTimeout(() => {
          val.style.backgroundColor = "black";
        }, 1000);
      });
    });
  });
});

document.querySelector("#reset").addEventListener("click",()=>{
    window.location.reload();
})