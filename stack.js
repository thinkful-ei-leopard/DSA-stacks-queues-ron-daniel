class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop(){
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function createStarTrek() {
    let starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    return starTrek;
}

function createEmpty() {
    let empty = new Stack();
    return empty;
}

function main() {
    let starTrek = createStarTrek();
    let empty = createEmpty();
    let numStack = createNumStack();
    // peek(starTrek);
    // isEmpty(starTrek);
    // isEmpty(empty);
    // starTrek.pop(); // remove Scotty
    // starTrek.pop(); // remove MoCoy
    // starTrek.push('Scotty'); // add Scotty back
    // display(starTrek);
    //sortStack(numStack);
}

main();


function peek(stack){
  return stack.top;
}

function isEmpty(stack) {
    if (!stack.top) {
        return console.log('True')
    }
    return console.log('False')
}

function display(stack){
    while(stack.top !== null) {
        console.log(stack.top);
        stack.top = stack.top.next;
    }
}

function is_palindrome(s) {
    // a b b a
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let stack1 = new Stack(); 
    let stack2 = new Stack();
    let stack3 = new Stack(); // our stack to deconstruct
    
    // make the first stack the entire string of characters
    for(let i=0; i<s.length; i++){
        let char = s.slice(i, i+1);
        stack1.push(char);
        stack3.push(char);
    }
    // remove the top of stack1 (pop) and save the returned value to stack2
    for(let i=0; i<s.length; i++) {
        stack2.push(stack3.pop())
    }
    console.log(stack1)
    console.log(stack2)
    // then compare stack1 to stack2
    console.log(stack1.top.data)
   
    let palindrome;
    // while(stack1.top !== null) {
    //     if(stack1.top.data === stack2.top.data) {
    //         stack1.pop();
    //         stack2.pop();
    //         palindrome = 'True'
    //     }
    //     palindrome = 'False'
    // }
    return console.log(palindrome);
    // stack1 = a q f q a
    // stack2 = a q f q a
}

// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function matchParens(exp) {
    // 0
    // (())
    // +1 for left paren (push), -1 for right paren(pop)
    // if 0 at end = all matching
    // if -1 or +1 its wrong 
    // if its not ( or ) then dont put in the stack 
    // if NULL is too early, then it is missing a right paren

    let stack1 = new Stack();

    // (((45 + 34) * 5))
    // 
    for(let i=0; i<exp.length; i++){
        let char = exp.slice(i, i+1);
        if (char === '(') {
        stack1.push(char);
        }
        else if(char === ')' && stack1.top) {
            stack1.pop()
        }
        else if(char === ')' && !stack1.top) {
            return console.log('you done missed a (')
        }
    }
    if(stack1.top) {
        return console.log('you done missed a )')
    }
    return console.log('you done did a good job')
}

matchParens(')')

function sortStack(stack){
    if(!stack.top) {
        return console.log('stack is empty')
    }
  let tempStack = new Stack();
  // get the first value
  if(tempStack.top === null) {
    tempStack.push(stack.pop());
  }
  let switched = false;
  while (stack.top !== null) {
      let topTemp = peek(tempStack);
      let topStack = stack.pop();
      if(topTemp <= topStack) {
          tempStack.push(topStack);
      }
      stack.push(tempStack.pop());
      tempStack.push(topStack);
      switched = true;
  }

//    3
//    2
//    1
  if(switched = true) {
      sortStack(tempStack);
  }

  return console.log(stack)
  
}

function createNumStack () {
    let numStack = new Stack();
    numStack.push(1);
    numStack.push(7);
    //
    // numStack.push(10);
    // numStack.push(12);
    // numStack.push(3);
    // numStack.push(16);
    // numStack.push(3);
    return numStack;
}



