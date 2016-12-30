import template from './parent.jade';

export default {
    template: template(),
    transclude: true,
    controller: class Parent{
        constructor(){}

        $onInit(){
            this.obj = {
                counter: 100
            }
            this.primitive = true;
        }

        increment(){
            this.obj.counter++;
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