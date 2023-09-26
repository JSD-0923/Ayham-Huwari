import {doublyLinkedList} from './doublyLinkedList.js';

const myList=new doublyLinkedList();

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu="1.add element to the end of the list\n2.remove the tail of the list\n3.remove the head of the list\n4.add element to the head of the list\n5.get the value of an element\n6.update the value of an element\n7.add element to a specific location of the list\n8.remove element from a specific location of the list\n9.exit\n";
function getUserInput() {
  rl.question(menu, (userInput) => {
      const choice = parseInt(userInput, 10); // Convert user input to an integer

      switch (choice) {
        case 1:
            rl.question("Enter the value to add: ", (val) => {
              myList.push(val);
              console.log("The new list:");
              myList.printList();
              getUserInput(); // Ask for input again
            });
          break;
          case 2:
            myList.pop();
            console.log("The new list:");
            myList.printList();
            getUserInput(); // Ask for input again
          break;
          case 3:          
            myList.shift();
            console.log("The new list:");
            myList.printList();
            getUserInput(); // Ask for input again          
          break;
          case 4:
          rl.question("Enter the value to add: ", (val) => {
            myList.unshift(val);
            console.log("The new list:");
            myList.printList();
            getUserInput(); // Ask for input again
          });
          break;
          case 5:
          rl.question("Enter the index: ", (ind) => {                        
              myList.get(ind);
              getUserInput(); // Ask for input again
            });            
          break;
          case 6:
            rl.question("Enter the index: ", (ind) => {
              rl.question("Enter the value: ", (val) => {            
                myList.set(ind,val);
                console.log("The new list:");
                myList.printList();
                getUserInput(); // Ask for input again
              });              
            });
          break;
          case 7:
            rl.question("Enter the index: ", (ind) => {
              rl.question("Enter the value: ", (val) => {            
                myList.insert(ind,val);
                console.log("The new list:");
                myList.printList();
                getUserInput(); // Ask for input again
              });              
            });
          break;
          case 8:
            rl.question("Enter the index: ", (ind) => {                         
                myList.remove(ind);
                console.log("The new list:");
                myList.printList();
                getUserInput(); // Ask for input again
            });
          break;
          case 9:
            rl.close();
            break;
        // Add more cases for other menu options
        // ...
        default:
          console.log("Invalid choice. Please choose a valid option.");
          getUserInput(); // Ask for input again
      }
    
  });
}

  getUserInput(); // Start the input process
