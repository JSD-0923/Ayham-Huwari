import {Node} from'./node.js';

export class doublyLinkedList {
    constructor() {
      this.head = null;   // Reference to the first node in the list
      this.tail = null;   // Reference to the last node in the list
      this.length = 0;
    }
    
    // add a new node with the given value and assigns it as the tail of the list
    push(value) {
      const newNode = new Node(value);  // Create a new node with the given value
      if (!this.head) {
        // If the list is empty, set the head and tail to the new node
        this.head = newNode;
        this.tail = newNode;
      } else {       
          // Otherwise, add the new node to the end of the list and update the tail reference
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;        
      }  
      this.length++;
    }

    //remove the tail of the list
    pop(){
        if (!this.head) {
          // If the list is empty
          console.log("The List Is Already Empty!")
        } 
        else {
            if (this.head === this.tail) {
                // If there's only one element in the list
                this.head = null;
                this.tail = null;
              } else {
                const newNode = this.tail; // Create a new node that points to the tail
                this.tail = newNode.prev;
                this.tail.next = null;
                newNode.prev = null; // De-attach the last element
              }
              this.length--;
        } 
    }

    //remove the head of the list
    shift(){
        if (!this.head) {
            // If the list is empty
            console.log("The List Is Already Empty!");
          } else {
            if (this.head === this.tail) {
              // If there's only one element in the list
              this.head = null;
              this.tail = null;
            } else {
              const newNode = this.head; // Create a new node that points to the head
              this.head = newNode.next;
              this.head.prev = null;
              newNode.next = null; // De-attach the first element
            }
            this.length--;
          }
    }
       
    //add a new node with the given value and assigns it as the haid of the list
    unshift(value){
      const newNode = new Node(value);  // Create a new node with the given value
      if (!this.head) {
        // If the list is empty, set the head and tail to the new node
        this.head = newNode;
        this.tail = newNode;
      } 
      else {
        // Otherwise, add the new node to the begining of the list and update the head reference
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      } 
      this.length++; 
    }

    //return the value of a specific element by its index
    get(index){
        if(index<=this.length){
            let indexPointer = this.head;//create a new node that points to the head
            //move that node to the desired index
            for(let i=1; i<index; i++){
              indexPointer=indexPointer.next;
            }
            console.log("your value is: ", indexPointer.value)
            //return the value of the node
            return indexPointer.value;
        }
        else{
            console.log("the index is not valid");
        }
    }

    //update the value of specific node by its index
    set(index, val) {
        if (index >= 1 && index <= this.length) {
          let indexPointer = this.head; // Create a new node that points to the head
          // Move that node to the desired index
          for (let i = 1; i < index; i++) {
            if (indexPointer) {
              indexPointer = indexPointer.next;
            } else {
              console.log("Invalid index");
              return false;
            }
          }
          // Check if indexPointer is not null before setting its value
          if (indexPointer) {
            indexPointer.value = val;
            return true;
          } else {
            console.log("Invalid index");
            return false;
          }
        } else {
          console.log("The index is not valid");
          return false;
        }
      }
      
      
      
    //add a new node at a specific index
    insert(index, val){
        const newNode = new Node(val);
        if (!this.head) {
            // If the list is empty
            console.log("The List Is Empty!");
            return false;
          } else {
            if (index > 0 && index <= this.length) {
              let indexPointer = this.head; // Create a new node that points to the head
              // Move that node to the desired index
              for (let i = 1; i < index; i++) {
                indexPointer = indexPointer.next;
              }
              // Check if it's the first node
              if (indexPointer === this.head) {
                this.unshift(val);
                
              } else if (indexPointer === this.tail) {
                  indexPointer.prev.next=newNode;
                  newNode.prev=indexPointer.prev;
                  indexPointer.prev=newNode;
                  newNode.next=indexPointer;
                  this.length++;
                  return true;
                  
              }else {
                  indexPointer.prev.next=newNode;
                  newNode.prev=indexPointer.prev;
                  indexPointer.prev=newNode;
                  newNode.next=indexPointer;
                  this.length++;
                  return true;
                  
              }
              
            } else {
              console.log("The index is not valid");
              return false;
            }
          }
   }
   remove(index) {
    if (!this.head) {
      // If the list is empty
      console.log("The List Is Already Empty!");
      return false;
    } else {
      if (index > 0 && index <= this.length) {
        let indexPointer = this.head; // Create a new node that points to the head
        // Move that node to the desired index
        for (let i = 1; i < index; i++) {
          indexPointer = indexPointer.next;
        }
        // Check if it's the first node
        if (indexPointer === this.head) {
          this.head = indexPointer.next;
          if (this.head) {
            this.head.prev = null;
          }
        } else if (indexPointer === this.tail) {
          // Check if it's the last node
          this.tail = indexPointer.prev;
          this.tail.next = null;          
        } else {
          // Remove the node
          indexPointer.prev.next = indexPointer.next;
          indexPointer.next.prev = indexPointer.prev;
        }
        indexPointer.next = null;
        indexPointer.prev = null;
        this.length--;
        return true;
      } else {
        console.log("The index is not valid");
        return false;
      }
    }
  }
  

  //print the list(added only for the testing)
  printList(){
    if (!this.head) {
        // If the list is empty
        console.log("The List Is Already Empty!")
        return true;
    }
    else{
        
        for(let indexPointer = this.head; indexPointer!=null; indexPointer=indexPointer.next){
            console.log(indexPointer.value);
        }
    } 
    
  };
}
