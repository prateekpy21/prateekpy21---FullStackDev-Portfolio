const subSections = document.querySelectorAll('.sub-section'); //sections
const secBtns = document.querySelectorAll('.controls'); //controlls
const eachSectBtns = document.querySelectorAll('.controller'); //control //sectBtn
const mainBody = document.querySelector('.main-content'); //allSelections


// Create a function to control the current active btns section
function activeSection() {
  for(let i = 0; i < eachSectBtns.length; i++) {
    eachSectBtns[i].addEventListener('click', function(){
        let currentBtn = document.querySelectorAll('.active-btn');
        currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
        this.className += ' active-btn';
        console.log(eachSectBtns[0]);
    });  
  }

  // Bring the active section in front and display it
  mainBody.addEventListener('click', (e) =>  {
    //Create an Id for the active section
    const id = e.target.dataset.id;
    if(id) {
    //Remove Selected from above btns
      secBtns.forEach((btn) => {
        btn.classList.remove('active');

      });
      e.target.classList.add('active');

      //Hide the other sections
      subSections.forEach((section)=>{
        section.classList.remove('active');
      });

      //Display the selected section
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
}

activeSection();


