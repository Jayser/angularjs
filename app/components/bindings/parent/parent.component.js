import template from './parent.jade';

export default {
    template: template(),
    transclude: true,
    controller: class Parent{
        constructor(){}

        $onInit(){
            this.obj = {
                counter: 100
            };
            this.primitive = true;
        }

        increment(){
            //              ***  important  ***
            // to fire $onChanges event inside of child component
            // the obj object should be rewritten
            // this.obj.counter++ (!) won't fire $onChanges event
            let counter = this.obj.counter;
            this.obj = {
                counter: counter + 1
            }
        }

        togglePrimitive(){
            this.primitive = !this.primitive;
        }

        update(event){
            console.info('parent: update', event);
            this.obj = event.obj;
            this.primitive = event.primitive;
        }
    }
}