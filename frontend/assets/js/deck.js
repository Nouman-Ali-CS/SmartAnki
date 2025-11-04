        document.getElementById('navSlider').addEventListener('click', function() {
            document.getElementById('sidebar').classList.toggle('contracted');
        });

        // Flashcard flip functionality
        function flipCard() {
            const card = document.getElementById('flashcard');
            // Only flip if not in edit mode
            if (!document.querySelector('.card-wrapper').classList.contains('edit-mode')) {
                card.classList.toggle('flipped');
            }
        }

        // Edit functionality
        const editBtn = document.getElementById('editBtn');
        const saveBtn = document.getElementById('saveBtn');
        const cancelBtn = document.getElementById('cancelBtn');
        const frontText = document.getElementById('frontText');
        const backText = document.getElementById('backText');
        let originalFrontText, originalBackText;

        editBtn.addEventListener('click', function() {
            // Store original text
            originalFrontText = frontText.innerHTML;
            originalBackText = backText.innerHTML;
            
            // Make text editable
            frontText.contentEditable = true;
            backText.contentEditable = true;
            
            // Add edit mode class
            document.querySelector('.card-wrapper').classList.add('edit-mode');
            
            // Focus on the front text
            frontText.focus();
        });

        saveBtn.addEventListener('click', function() {
            // Save changes
            frontText.contentEditable = false;
            backText.contentEditable = false;
            
            // Remove edit mode
            document.querySelector('.card-wrapper').classList.remove('edit-mode');
            
            console.log('Card content saved');
        });

        cancelBtn.addEventListener('click', function() {
            // Revert to original text
            frontText.innerHTML = originalFrontText;
            backText.innerHTML = originalBackText;
            
            // Make text non-editable
            frontText.contentEditable = false;
            backText.contentEditable = false;
            
            // Remove edit mode
            document.querySelector('.card-wrapper').classList.remove('edit-mode');
        });

        // Explain button functionality - navigate to upload page
        document.getElementById('explainBtn').addEventListener('click', function() {
            // Navigate to the upload page
            window.location.href = 'explain.html'; // Adjust the path as needed
        });

        // Keyboard support for flipping card (only when not in edit mode)
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && !document.querySelector('.card-wrapper').classList.contains('edit-mode')) {
                e.preventDefault();
                document.getElementById('flashcard').classList.toggle('flipped');
            }
        });

        // Prevent Enter key from flipping card in edit mode
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && document.querySelector('.card-wrapper').classList.contains('edit-mode')) {
                e.stopPropagation();
                // Allow default behavior (new line in contenteditable)
            }
        });

        // Navigation arrows functionality
        document.querySelectorAll('.side-arrow-btn').forEach(button => {
            button.addEventListener('click', function() {
                const direction = this.textContent === '<' ? -1 : 1;
                console.log('Navigate to card:', direction);
            });
        });

        // Difficulty buttons functionality
        document.querySelectorAll('.btn-difficulty').forEach(button => {
            button.addEventListener('click', function() {
                const difficulty = this.textContent;
                console.log('Set difficulty:', difficulty);
                
                // Simulate moving to next card after difficulty selection
                setTimeout(() => {
                    document.getElementById('flashcard').classList.remove('flipped');
                }, 500);
            });
        });