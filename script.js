const input = document.getElementById('input');
const wordCount = document.getElementById('word-count');

input.addEventListener('input', () => {
  const text = input.value.trim();
  const count = text === '' ? 0 : text.split(/\s+/).length;
  wordCount.textContent = count;
});