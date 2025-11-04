        let currentCardIndex = 0;

        const cards = [
            {
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                text: "The quick brown fox jumps over the lazy dog. This is a pangram that contains every letter of the English alphabet at least once."
            },
            {
                text: "Computer Science is the study of computation, automation, and information. It is fundamentally concerned with understanding what problems can be solved using computational methods."
            }
        ];

        function nextCard() {
            currentCardIndex = (currentCardIndex + 1) % cards.length;
            updateCard();
        }

        function previousCard() {
            currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
            updateCard();
        }

        function updateCard() {
            const cardText = document.querySelector('.card-text');
            cardText.textContent = cards[currentCardIndex].text;
        }

        function editCard() {
            alert(`Editing card ${currentCardIndex + 1}`);
        }

        function explainCard() {
            alert(`Explaining card ${currentCardIndex + 1}: ${cards[currentCardIndex].text}`);
        }