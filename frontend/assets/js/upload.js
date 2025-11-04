        // Upload section interaction
        const uploadSection = document.getElementById('uploadSection');
        const fileInput = document.getElementById('fileInput');
        const uploadText = document.getElementById('uploadText');
        const fileNameDisplay = document.getElementById('fileNameDisplay');
        const sendBtn = document.getElementById('sendBtn');

        uploadSection.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                // Hide upload text and show file name inside the input
                uploadText.style.display = 'none';
                fileNameDisplay.textContent = file.name;
                fileNameDisplay.style.display = 'block';
                sendBtn.disabled = false;
                console.log('File selected:', file.name);
            } else {
                // Show upload text and hide file name
                uploadText.style.display = 'block';
                fileNameDisplay.style.display = 'none';
                fileNameDisplay.textContent = '';
                sendBtn.disabled = true;
            }
        });

        // Send button interaction
        sendBtn.addEventListener('click', () => {
            const file = fileInput.files[0];
            if (file) {
                // Show loading state
                const originalText = sendBtn.innerHTML;
                sendBtn.innerHTML = '<span>Sending...</span>';
                sendBtn.disabled = true;
                
                // Simulate sending to backend/AI
                setTimeout(() => {
                    alert(`File "${file.name}" sent to AI successfully!`);
                    sendBtn.innerHTML = originalText;
                    sendBtn.disabled = false;
                    
                    // Reset form
                    fileInput.value = '';
                    uploadText.style.display = 'block';
                    fileNameDisplay.style.display = 'none';
                    fileNameDisplay.textContent = '';
                }, 1500);
            }
        });

        // Scroll up button
        const scrollUpBtn = document.getElementById('scrollUpBtn');

        scrollUpBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollUpBtn.classList.add('visible');
            } else {
                scrollUpBtn.classList.remove('visible');
            }
        });