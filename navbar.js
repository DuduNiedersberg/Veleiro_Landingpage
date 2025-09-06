<script>
document.querySelector('.navbar-toggle').addEventListener('click', function() {
  document.querySelector('.navbar-links').classList.toggle('active');
});
document.querySelectorAll('.navbar-links a').forEach(link =>
  link.addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('active');
  })
);
</script>