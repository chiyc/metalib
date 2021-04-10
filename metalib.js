// Homepage Script

if (document.location.href === 'https://www.taggingguru.com/') {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function() {
      document.title = 'Tagging Guru | Welcome | Homepage';
      console.log('Updated title');
    })
    .catch(function(err) {
      console.error('error updating title', err);
    });
}

// My Team Page Script

if (document.location.href === 'https://www.taggingguru.com/my-team') {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function() {
      document.title = 'Tagging Guru | Get to Know Us | Team ';
      console.log('Updated title');
    })
    .catch(function(err) {
      console.error('error updating title', err);
    });
}

// About Us Page Script

if (document.location.href === 'https://www.taggingguru.com/about-tagging-guru') {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function() {
      document.title = 'Tagging Guru | About Us | Meta Data CMS';
      console.log('Updated title');
    })
    .catch(function(err) {
      console.error('error updating title', err);
    });
}

// Features Page Script

if (document.location.href === 'https://www.taggingguru.com/features') {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function() {
      document.title = 'Tagging Guru | Features | Platform Options';
      console.log('Updated title');
    })
    .catch(function(err) {
      console.error('error updating title', err);
    });
}

// Products Script

if (document.location.href === 'https://www.taggingguru.com/products') {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function() {
      document.title = 'Tagging Guru | Products | Plans and Pricing';
      console.log('Updated title');
    })
    .catch(function(err) {
      console.error('error updating title', err);
    });
}

// Blog Main Page Script

if (document.location.href === 'https://www.taggingguru.com/blog') {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function() {
      document.title = 'Tagging Guru | Knowledge Hub | Blog';
      console.log('Updated title');
    })
    .catch(function(err) {
      console.error('error updating title', err);
    });
}

// Blog 1 Page Script

if (document.location.href === 'https://www.taggingguru.com/blog/what-is-a-cms') {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function() {
      document.title = 'Tagging Guru | What is a CMS | Blog';
      console.log('Updated title');
    })
    .catch(function(err) {
      console.error('error updating title', err);
    });
}

// Blog 2 Page Script

if (document.location.href === 'https://www.taggingguru.com/blog/why-tagging-guru') {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function() {
      document.title = 'Tagging Guru | Competitor Comparison | Blog';
      console.log('Updated title');
    })
    .catch(function(err) {
      console.error('error updating title', err);
    });
}

// Blog 3 Page Script

if (document.location.href === 'https://www.taggingguru.com/blog/what-are-meta-tags') {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function() {
      document.title = 'Tagging Guru | Everything You Need to Know About Meta Tags | Blog';
      console.log('Updated title');
    })
    .catch(function(err) {
      console.error('error updating title', err);
    });
}

// Blog 4 Page Script

if (document.location.href === 'https://www.taggingguru.com/blog/crushing-organic-search') {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function() {
      document.title = 'Tagging Guru | Organic Search Best Practices | Blog';
      console.log('Updated title');
    })
    .catch(function(err) {
      console.error('error updating title', err);
    });
}
