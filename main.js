// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// user clicks on an empty heart
  // invoke the given function (mimicServer) to simulate making a server request
  // when the server returns a failure status
    // respond to the error using a .catch(() => ()) block after .then(() => {}) block
    // display the error modal by removing the hidden class
    // display the server error message in the modal
    // use setTimeout to hide the modal after 3 seconds (add the .hidden class)
  // when the server returns a success status
    // change the heart to a full heart
    // add the .activated-heart class to make the heart appear red
// user clicks on a full heart
  // change the heart back to an empty heart
  // remove the .activated-heart class

// document.addEventListener("DOMContentLoaded", () => {
  
//   function clickHeart() {
//   let hearts = document.getElementsByClassName('like-glyph');
//     for (const heart of hearts) {
//       heart.addEventListener("click", clicky)
//     }
//   }

//   function clicky(hearts) {
//     console.log(hearts.target);
//     mimicServerCall()
//       .then( () => {
//         if (hearts.target.innerText === EMPTY_HEART) {
//           hearts.target.className.add('activated-heart');
//           hearts.target.innerText = FULL_HEART;
//         } else {
//           hearts.target.className.remove('activated-heart');
//           hearts.target.innerText = EMPTY_HEART;
//         }

//       })
//       .catch(() => {
//         const error = document.getElementById('modal');
//         console.log(error);
//         error.className='';
//       })
        
//       .then (() => { setTimeout( () => {
//         const newError = document.getElementById('modal');
//         newError.className ='hidden',[ 6000]
//         })
//       })
//     }

//   clickHeart();

// })

let heartsNodeArray = [...document.getElementsByClassName('like-glyph')];
let modal = document.getElementById('modal');
let modalParagraph = document.getElementById('modal-message');

let callServerAndCatch = (event) => {
  mimicServerCall()
  .then(() => handleResponse(event))
  .catch(error => handleError(error))
}

let handleError = (errorMessage) => {
  modal.classList.remove('hidden')
  modalParagraph.innerText = errorMessage;
  setTimeout(() => { 
    modal.classList.add('hidden')
    modalParagraph.innerText = '';
  }, 3000);
}

let handleResponse = (event) => {
  if (event.target.textContent === EMPTY_HEART) {
    event.target.classList.add('activated-heart');
    event.target.textContent = FULL_HEART;
  } else {
    event.target.classList.remove('activated-heart');
    event.target.textContent = EMPTY_HEART;
  }
}

heartsNodeArray.map(heartNode => {
  heartNode.addEventListener('click', callServerAndCatch)
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
