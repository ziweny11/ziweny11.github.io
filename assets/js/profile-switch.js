// Profile Image Switcher
(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProfileSwitch);
  } else {
    initProfileSwitch();
  }

  function initProfileSwitch() {
    const profileImage = document.querySelector('.profile-image-switchable img');
    const switcher = document.querySelector('.profile-image-switcher');
    
    if (!profileImage || !switcher) {
      return; // Profile image switcher not found
    }

    const dots = switcher.querySelectorAll('.profile-switch-dot');
    
    // Get base URL from current location
    const basePath = window.location.pathname.replace(/\/[^/]*$/, '') || '';
    const imageBasePath = basePath + '/assets/img/';
    
    // Images to switch between
    const images = {
      'ziwen_profile_1.jpg': imageBasePath + 'ziwen_profile_1.jpg',
      'ziwen_profile_2.jpg': imageBasePath + 'ziwen_profile_2.jpg'
    };

    // Get saved preference or default to first image
    const savedImage = localStorage.getItem('profileImage') || 'ziwen_profile_1.jpg';
    
    // Set initial image if different from default
    if (savedImage !== 'ziwen_profile_1.jpg' && images[savedImage]) {
      updateProfileImage(savedImage);
      updateActiveDot(savedImage);
    }

    // Add click handlers to dots
    dots.forEach(dot => {
      dot.addEventListener('click', function() {
        const imageName = this.getAttribute('data-image');
        if (images[imageName]) {
          updateProfileImage(imageName);
          updateActiveDot(imageName);
          localStorage.setItem('profileImage', imageName);
        }
      });
    });

    function updateProfileImage(imageName) {
      const imgSrc = images[imageName];
      
      // Find the picture element and img tag
      const picture = profileImage.closest('picture');
      const imgTag = picture ? picture.querySelector('img') : profileImage;
      
      if (imgTag) {
        // Remove srcset and source elements to avoid conflicts
        imgTag.removeAttribute('srcset');
        const source = picture ? picture.querySelector('source') : null;
        if (source) {
          source.style.display = 'none';
        }
        
        // Smooth transition
        imgTag.style.transition = 'opacity 0.2s ease-in-out';
        imgTag.style.opacity = '0';
        
        // Wait a moment, then update src and fade in
        setTimeout(() => {
          imgTag.src = imgSrc;
          const newImg = new Image();
          newImg.onload = function() {
            imgTag.style.opacity = '1';
          };
          newImg.onerror = function() {
            // If image fails to load, still show it
            imgTag.style.opacity = '1';
          };
          newImg.src = imgSrc;
        }, 100);
      }
    }

    function updateActiveDot(imageName) {
      dots.forEach(dot => {
        if (dot.getAttribute('data-image') === imageName) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }
})();

