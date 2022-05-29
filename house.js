AFRAME.registerComponent("house", {
    init:function() {
        this.placesContainer = this.el;
        this.createCards()
    },

    createCards: function() {
        let previousXposition = -20;
        for(i = 0; i < 5; i++){
            const posX = previousXposition + 22;
            const posY = 10;
            const posZ = -20;
            const position = { x: posX, y: posY, z: posZ}
            previousXposition = posX;

            const borderEl = this.createBorder(position, i);
            this.placesContainer.appendChild(borderEl);
        }
    },

    createBorder: function(position, id) {
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id", id)
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive:"ring",
            radiusInner:9,
            radiusOuter:10,
        });
        entityEl.setAttribute("material", {
            color:"cyan",
            opacity:1,
        });
        return entityEl
    },


})