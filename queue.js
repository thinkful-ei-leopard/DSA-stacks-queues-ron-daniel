class _Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value){
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _Node(data);
        if (this.first === null) {
            this.first = node;
        }
        if(this.last){
            this.last.next = node;
        }
        this.last = node;
    }
    dequeue(){
        if(!this.first) {
            return console.log('nada in queue')
        }
        // Ron Dan Steve
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null;
            return node.value;
        }
        
        return node.value;
    }
}

function createStarTrekQ () {
    let starTrekQ = new Queue();
    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');
    return starTrekQ;
}

function main() {
    let starTrekQ = createStarTrekQ();
    console.log(starTrekQ);
    console.log(peek(starTrekQ));
    console.log(isEmpty(starTrekQ))
    display(starTrekQ)
}

function peek(q) {
    return q.first;
}

function isEmpty(q) {
    if(q.first === null) {
        return true;
    }
    return false;
}

function display(q) {
    while(q.first !== null){
        console.log(q.first);
        q.first = q.first.next;
    }
}

main();