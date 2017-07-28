var events= {}
module.exports = {
    events:events,
    addEvent:function(eventName){
        events[eventName] = []
    },
    on:function(eventName,callback){  
        if(!events[eventName]){
            this.addEvent(eventName)
        }
        if(events[eventName].indexOf(callback) ===-1 ){
            events[eventName].push(callback)
        } 
 
    },
    off:function(eventName,callback){  
        if(!events[eventName]){
           return
        }
        var index = events[eventName].indexOf(callback) 
        if(index>=0){
            events[eventName].splice(index,1)
        }  
    },
    call:function(eventName,data){
        if(events[eventName]){
            for(var i =0; i< events[eventName].length;i++){
                (events[eventName][i])(data)
            } 
        }
    }
}