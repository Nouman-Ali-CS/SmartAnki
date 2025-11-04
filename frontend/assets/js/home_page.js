
// Main content element selection
const deckCards = document.querySelectorAll('.deck-card');
const menuToggles = document.querySelectorAll('.menu-toggle');
const renameModal = document.getElementById('renameModal');
const renameInput = document.getElementById('renameInput');
const cancelRename = document.getElementById('cancelRename');
const saveRename = document.getElementById('saveRename');
const profileAvatar = document.querySelector('.profile-avatar');
let currentDeckId = null;

// Card menu functionality
menuToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        const dropdown = this.nextElementSibling;
        
        // Close all other dropdowns
        document.querySelectorAll('.menu-dropdown').forEach(d => {
            if (d !== dropdown) d.classList.remove('show');
        });
        
        dropdown.classList.toggle('show');
    });
});

// Close dropdowns when clicking elsewhere
document.addEventListener('click', function() {
    document.querySelectorAll('.menu-dropdown').forEach(dropdown => {
        dropdown.classList.remove('show');
    });
});

// Rename functionality
document.querySelectorAll('.rename-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const card = this.closest('.deck-card');
        const title = card.querySelector('.deck-card-title').textContent;
        currentDeckId = card.getAttribute('data-id');
        
        renameInput.value = title;
        renameModal.classList.add('show');
        
        // Focus on input field when modal opens
        setTimeout(() => {
            renameInput.focus();
            renameInput.select();
        }, 100);
        
        // Close dropdown
        this.closest('.menu-dropdown').classList.remove('show');
    });
});

// Delete functionality
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const card = this.closest('.deck-card');
        const title = card.querySelector('.deck-card-title').textContent;
        
        if (confirm(`Are you sure you want to delete "${title}"?`)) {
            card.remove();
            console.log(`Deck "${title}" deleted`);
        }
        
        // Close dropdown
        this.closest('.menu-dropdown').classList.remove('show');
    });
});

// Modal functionality
cancelRename.addEventListener('click', function() {
    renameModal.classList.remove('show');
});

saveRename.addEventListener('click', function() {
    saveRenameAction();
});

// Enter key functionality for rename input
renameInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        saveRenameAction();
    }
});

// Function to handle save rename action
function saveRenameAction() {
    const newName = renameInput.value.trim();
    if (newName) {
        const card = document.querySelector(`.deck-card[data-id="${currentDeckId}"]`);
        if (card) {
            card.querySelector('.deck-card-title').textContent = newName;
            console.log(`Deck renamed to: ${newName}`);
        }
        renameModal.classList.remove('show');
    }
}

// Close modal when clicking outside
renameModal.addEventListener('click', function(e) {
    if (e.target === renameModal) {
        renameModal.classList.remove('show');
    }
});

// Deck cards functionality
deckCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking the menu
        if (!e.target.closest('.card-menu')) {
            const title = this.querySelector('.deck-card-title').textContent;
            console.log('Deck card clicked:', title);
        }
    });
});

// Profile avatar functionality
profileAvatar.addEventListener('click', function() {
    console.log('Profile clicked');
});