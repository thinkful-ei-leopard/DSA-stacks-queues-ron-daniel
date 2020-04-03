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

function createDanceQueue() {
    let danceQueue = new Queue();
    danceQueue.enqueue({gender: 'F', name: 'Jane'});
    danceQueue.enqueue({gender: 'M', name: 'Frank'});
    danceQueue.enqueue({gender: 'M', name: 'John'});
    danceQueue.enqueue({gender: 'M', name: 'Sherlock'});
    danceQueue.enqueue({gender: 'F', name: 'Madonna'});
    danceQueue.enqueue({gender: 'M', name: 'David'});
    danceQueue.enqueue({gender: 'M', name: 'Christopher'});
    danceQueue.enqueue({gender: 'F', name: 'Beyonce'});
    return danceQueue;
}


function squareDancing(){
    let danceQueue = createDanceQueue();
    if (!danceQueue.first) {
        console.log('get off the wall wallflowers!')
    }
    let menQueue = new Queue();
    let womenQueue = new Queue();
    while (danceQueue.first !== null) {
        if (danceQueue.first.value.gender === 'M') {
            menQueue.enqueue(danceQueue.dequeue())
        }
        else if (danceQueue.first.value.gender === 'F') {
            womenQueue.enqueue(danceQueue.dequeue())
        }
        else {
            return console.log('Must have valid gender to dance because its 1920');
        }
    }

    while (menQueue.first && womenQueue.first) {
        woman = womenQueue.dequeue();
        man = menQueue.dequeue();
        console.log(`Female dancer is ${woman.name}, and the male dancer is ${man.name}`);
    }
    if (menQueue.first) {
        while (menQueue.first) {
            man = menQueue.dequeue();
            console.log(`${man.name} is waiting to dance`)
        }
    }
    if (womenQueue.first) {
        while (womenQueue.first) {
            woman = womenQueue.dequeue();
            console.log(`${woman.name} is waiting to dance`)
        }
    }
}

function createSnakeBank(){
    let snakeQueue = new Queue();
    snakeQueue.enqueue('Joe Snakeman');
    snakeQueue.enqueue('John Snakeman');
    snakeQueue.enqueue('Jill Snakeman');
    snakeQueue.enqueue('Jane Snakeman');
    snakeQueue.enqueue('Bob Snakeman');
    snakeQueue.enqueue('Sally Snakeman');
    snakeQueue.enqueue('Sara Snakeman');
    return snakeQueue;
}

function snakeBank(queue) {
    if (!queue.first) {
        console.log('easy day');
    }
    while (queue.first) {
        let paperwork = Math.floor(Math.random() * 100);
        // if they have bad paperwork
        if (paperwork <= 25) {
            poorSoul = queue.dequeue();
            console.log(`${poorSoul} had bad paperwork. Really bad paperwork.`);
            queue.enqueue(poorSoul);
        }
        // if they have good paperwork
        queue.dequeue();
        console.log(`woohoo`);
    }
    console.log('No more in line!');
}

function main() {
    let starTrekQ = createStarTrekQ();
    let danceQueue = createDanceQueue();
    let snakeQueue = createSnakeBank();
    // console.log(starTrekQ);
    // console.log(peek(starTrekQ));
    // console.log(isEmpty(starTrekQ))
    // starTrekQ.dequeue();
    // starTrekQ.dequeue();
    // display(starTrekQ);
    // display(danceQueue);
    squareDancing(danceQueue);
    snakeBank(snakeQueue);
}
main();