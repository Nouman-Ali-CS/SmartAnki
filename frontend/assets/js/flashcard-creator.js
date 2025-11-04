        function getSubjectFromURL() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('subject');
        }

        // Set subject name in header
        const subject = getSubjectFromURL();
        if (subject) {
            document.getElementById('subjectHeader').textContent = decodeURIComponent(subject);
        }

        const generateBtn = document.getElementById('generateBtn');
        const frontText = document.getElementById('frontText');
        const backText = document.getElementById('backText');

        generateBtn.addEventListener('click', function() {
            const frontValue = frontText.value.trim();
            const backValue = backText.value.trim();

            if (!frontValue || !backValue) {
                alert('Please fill in both front and back fields');
                return;
            }

            console.log('Flashcard created:', { 
                subject: subject,
                front: frontValue, 
                back: backValue 
            });
            alert('Flashcard generated successfully!');

            // Clear inputs
            frontText.value = '';
            backText.value = '';
            frontText.focus();
        });

        // Allow Ctrl+Enter to submit
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                generateBtn.click();
            }
        });

        // Focus on front text on page load
        window.addEventListener('load', function() {
            frontText.focus();
        });