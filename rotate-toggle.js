AFRAME.registerComponent('rotate-toggle',{
    init: function() {
        let el = this.el;
        this.toggleRotate = function() {
            console.log('clicked');
            el.setAttribute('animation','property: rotation; from:0 0 0; to:0 360 0; dir:alternate; dur:1500; loop:false');
        }
        this.el.addEventListener('click',this.toggleRotate);
    }, 
    remove: function() {
        this.el.removeEventListener('click',this.toggleRotate);

    }
})