const EventEmiiter = require('events'); //class
const emitter = new EventEmiiter();//objct


//Listenr : called when the event is raised
emitter.on('messageLogged',function(){
    console.log('called');
})

//Raise event
emitter.emit('messageLogged')

//emit means to make noise or generate signal
