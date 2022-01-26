const loadCommentsBtnElement = document.getElementById('load-comments')

async function fetchCommentsForPost() {
    const postId = loadCommentsBtnElement.dataset.postid
    const response = await fetch(`/posts/${postId}/comments`);
    const responseData = await response.json()
}

loadCommentsBtnElement.addEventListener('click', fetchCommentsForPost)..