const loadCommentsBtnElement = document.getElementById('load-comments-btn');

function fetchCommentsForPost(event) {
    const postId = loadCommentsBtnElement.dataset.postId
    const response = await fetch(`/posts/${postId}/comments`)
    const reponseData =  await response.json()
}

loadCommentsBtnElement,addEventListener('click', fetchCommentsForPost)