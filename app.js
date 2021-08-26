const h2 = document.querySelector("h2");


const superEventHandler = {
    handMouseEnter: function () {
        h2.innerText="The mouse is here!";
        h2.style.color = "red";
    },
    handMouseLeave: function() {
        h2.innerText="The mouse is gone!";
        h2.style.color = "blue";
    },
    handleWindowResize:function() {
        h2.innerText="You just resized!";
        h2.style.color = "pink";
    },
    handMouseClick: function() {
        h2.innerText="That was right Click";
        h2.style.color="green";
    }
};

h2.addEventListener("mouseenter", superEventHandler.handMouseEnter);
h2.addEventListener("mouseleave",superEventHandler.handMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
document.addEventListener("contextmenu", superEventHandler.handMouseClick);