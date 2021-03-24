if (document.location.href === 'https://www.taggingguru.com/my-team') {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function() {
      document.title = 'Tagging Guru | Contributors | Tagging Guru Team Unite';
      console.log('updated title');
    })
    .catch(function(err) {
      console.error('errror updating title', err);
    });
}
