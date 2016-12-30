import template from './child.jade';

export default {
    template: template(),
    bindings: {
        obj: "<",
        primitive: "<",
        onUpdate: "&"
    },
    controller: class Child {
        constructor(){}

        $onInit(){
            console.log(`data from bindings this.obj:` , this.obj);
            console.log(`data from bindings this.primitive:` , this.primitive);
        }

        $onChanges(changes){
            console.info(changes)
          /*  if(changes.obj){
                // this.obj = angular.copy(changes.obj.currentValue)
            }*/
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