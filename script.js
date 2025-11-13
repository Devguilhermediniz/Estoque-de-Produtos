document.addEventListener('DOMContentLoaded', () => {
    const feedbackMessage = document.getElementById('feedbackMessage');
    const searchInput = document.getElementById('searchInput');
    const productsTableBody = document.querySelector('#productsTable tbody');

    // Função para exibir mensagens de feedback
    function showFeedback(message, type = 'success') {
        feedbackMessage.textContent = message;
        feedbackMessage.className = `feedback-message ${type}`;
        feedbackMessage.style.display = 'block';

        setTimeout(() => {
            feedbackMessage.style.display = 'none';
        }, 3000);
    }

    // Funcionalidade para os botões "Editar"
    productsTableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-btn')) {
            const row = event.target.closest('tr');
            const productId = row.cells[0].textContent;
            showFeedback(`Editando produto com ID: ${productId}`, 'info');
            alert(`Você clicou em Editar para o produto ID: ${productId}`);
        }
    });

    // Funcionalidade para os botões "Excluir"
    productsTableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            const productId = row.cells[0].textContent;

            if (confirm(`Tem certeza que deseja excluir o produto ID: ${productId}?`)) {
                row.remove();
                showFeedback(`Produto com ID: ${productId} excluído com sucesso!`, 'success');
            } else {
                showFeedback(`Exclusão do produto ID: ${productId} cancelada.`, 'info');
            }
        }
    });

    // Funcionalidade para a barra de pesquisa
    searchInput.addEventListener('keyup', (event) => {
        const searchText = event.target.value.toLowerCase();
        const rows = productsTableBody.querySelectorAll('tr');

        rows.forEach(row => {
            const productName = row.cells[1].textContent.toLowerCase();
            if (productName.includes(searchText)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});
