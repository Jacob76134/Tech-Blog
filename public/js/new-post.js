const createPostEventHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector("#input-title").value.trim();
    const content = document.querySelector("#post-body").value.trim();
  
    if (title && content) {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title: title, body: content }),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed!");
      }
    }
  };
  
  document
    .querySelector(".new-post-form")
    .addEventListener("submit", createPostEventHandler);