const options = document.querySelectorAll('.bundle-option');
    const totalSpan = document.getElementById('total');

    const prices = {
      1: "195.00",
      2: "345.00",
      3: "528.00"
    };

    options.forEach(option => {
      option.addEventListener('click', () => {
        options.forEach(o => {
          o.classList.remove('selected');
          o.querySelector('.selectors').style.display = 'none';
        });

        option.classList.add('selected');
        option.querySelector('input').checked = true;

        const selectedId = option.getAttribute('data-id');
        totalSpan.textContent = prices[selectedId];

        const selectorsDiv = option.querySelector('.selectors');
        if(selectorsDiv) {
          selectorsDiv.style.display = 'block';
        }
      });
    });