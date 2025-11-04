        const createBtn = document.getElementById('createBtn');
        const subjectInput = document.getElementById('subjectInput');

        createBtn.addEventListener('click', function() {
            const subjectName = subjectInput.value.trim();
            
            if (subjectName === '') {
                alert('Please enter a subject name');
                return;
            }

            // Add button press animation
            this.style.transform = 'translateY(0)';
            
            // Redirect to flashcard creator with subject name
            window.location.href = `flashcard-creator.html?subject=${encodeURIComponent(subjectName)}`;
        });

        // Allow Enter key to submit
        subjectInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                createBtn.click();
            }
        });

        // Focus on input on page load
        window.addEventListener('load', function() {
            subjectInput.focus();
        });