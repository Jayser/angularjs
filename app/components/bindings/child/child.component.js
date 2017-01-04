import template from './child.jade';

export default {
    template: template(),
    bindings: {
        obj: "<",
        primitive: "<",
        onUpdate: "&"
    },
    controller: class Child {
        $onChanges(changes){
            if (changes.obj) {
                /**  uncomment lines bellow to fix 1-way data binding */
                // this.obj = angular.copy(changes.obj.currentValue)
            }
        }

        increment(){
            this.obj.counter++;
        }

        togglePrimitive(){
            this.primitive = !this.primitive;
        }

        sendDataBack(){
            this.onUpdate({
                event: {
                    obj: this.obj,
                    primitive: this.primitive
                }
            })
        }
    }
}