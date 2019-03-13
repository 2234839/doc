const Rx=require('rxjs/Rx')

// Rx.Observable.of(1,2,3)
const source$=Rx.Observable.of(1,2,3)
source$.subscribe(console.log)