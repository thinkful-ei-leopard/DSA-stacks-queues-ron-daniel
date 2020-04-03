class _Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor(value){
        this.first = null;
        this.last = null;
    }
    // Ron Dan
    // QUEUE 
    //      -first Ron
    //      -last Jill
    // Ron
    //     - value Ron
    //     - next Dan
    //     - prev null
    // Dan
    //     - value Dan
    //     - next Jill
    //     - prev Ron
    // Jill
    //     - value Jill
    //     - next null
    //     - prev Dan
    // Ron Dan Jill
    enqueue(data) {
        const node = new _Node(data);
        if (this.first === null) {
            this.first = node;
        }
        if(this.last){
            this.last.next = node;
            node.prev = this.last;
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
        this.first.prev = null;
        if (node === this.last) {
            this.last = null;
            return node.value;
        }
        
        return node.value;
    }
}

function peek(q){
    return q.first;
}

function display(q) {
    while(q.first !== null){
        console.log(q.first);
        q.first = q.first.next;
    }
}

function createStarTrekQ () {
    let starTrekQ = new Queue();
    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    // starTrekQ.enqueue('Uhura');
    // starTrekQ.enqueue('Sulu');
    // starTrekQ.enqueue('Checkov');
    //display(starTrekQ)
    return starTrekQ;
}

function main() {
    let starTrekQ = createStarTrekQ();
    display(starTrekQ);
}
main();