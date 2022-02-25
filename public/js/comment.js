
const commentEventHandler = async (event) => {
    event.preventDefault();
    const comment = document.querySelector("#input-comment").value.trim();
    const form = document.querySelector(".comment-form");
    const id = form.getAttribute("data-id");
    console.log(comment, form, id)
    if (comment) {
      const response = await fetch(`/api/comments/${id}`, {
        method: "POST",
        body: JSON.stringify({body: comment}),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${id}`);
      } else {
        alert("Failed!");
      }
    }
};

document.querySelector(".comment-form")
document.addEventListener("submit", commentEventHandler);