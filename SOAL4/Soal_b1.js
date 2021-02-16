fetch('https://dhiyo-api-article.herokuapp.com/articles')
    .then(res => res.json())
    .then(res => {
        res.data.map(user => {
            console.log(`${user.tittle}:`);
        });
    });