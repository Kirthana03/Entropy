AFRAME.registerComponent('state-toggle',{
    init: function() {
        let el = this.el;
        this.toggleState = function() {
            console.log('clicked');
            el.setAttribute('animation','property: opacity; from:1; to:0; dur:1500')
            // el.setAttribute('opacity','0');
            el.setAttribute('position','0 2 -60')
        }
        this.el.addEventListener('click',this.toggleState);
    }, 
    remove: function() {
        this.el.removeEventListener('click',this.toggleState);

    }
})
