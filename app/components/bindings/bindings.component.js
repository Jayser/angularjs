import template from './bindings.jade';

export default {
    template: template(),
    transclude: true,
    controller: class Parent{
        constructor(){
            this.primitive = true;
            this.obj = {
                counter: 100
            };
        }

        increment(){
            /**
             * To fire $onChanges event inside of child component
             * this.obj object should be rewritten
             * this.obj.counter++ (!) won't fire $onChanges event
             */
            this.obj = {
                counter: this.obj.counter + 1
            }
        }

        togglePrimitive(){
            this.primitive = !this.primitive;
        }

        update(event){
            this.obj = event.obj;
            this.primitive = event.primitive;
        }
    }
}