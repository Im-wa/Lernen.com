function filterTag(tag) {
    document.querySelectorAll('.post').forEach(post => {
        if (tag === 'all' || post.classList.contains(tag)) {
            post.style.display = '';
        } else {
            post.style.display = 'none';
        }
    });
}