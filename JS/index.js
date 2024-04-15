//My Skills Overlay
const image = document.querySelector('.skillsTitle img');
const overlay = document.getElementById('overlay');

image.addEventListener('mouseover', () => {
  overlay.style.display = 'block';
});
image.addEventListener('mouseout', () => {
  overlay.style.display = 'none';
});

//Resume Button
const button = document.getElementById('resumeButton');

button.addEventListener('click', function() {
  window.open('https://drive.google.com/file/d/1wEDXnN3p2sSEv5ipZ8QT9LPSybz3Uo_s/view?usp=drive_link');
});

//Contact Me Modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('emailModal');
    const openModalLink = document.getElementById('openModalLink');
    const closeModalBtn = document.querySelector('.close');
    const emailForm = document.getElementById('emailForm');
  
    function openModal() {
      modal.style.display = 'block';
    }
  
    function closeModal() {
      modal.style.display = 'none';
    }
  
     openModalLink.addEventListener('click', function(e) {
      e.preventDefault();
      openModal();
    });
  
    closeModalBtn.addEventListener('click', closeModal);
  
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(emailForm);
        
        fetch('/send-email', {
        method: 'POST',
        body: formData
        })
        .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Email sending failed');
        }
        })
        .then(data => {
        alert(data.message); 
        closeModal();
        })
        .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the email. Please try again later.');
        });
    });
});
  