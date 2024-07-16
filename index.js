const fs = require("fs");

const blogData = [];

const baseImageUrl =
  "https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png";

const extraImages = [
  "https://via.placeholder.com/800x400.png?text=Extra+Image+1",
  "https://via.placeholder.com/800x400.png?text=Extra+Image+2",
  "https://via.placeholder.com/800x400.png?text=Extra+Image+3",
];

const baseContent = [
  {
    type: "paragraph",
    text: "This is the introductory paragraph of the blog post.",
  },
  { type: "heading", id: "first-heading", text: "First Heading" },
  {
    type: "paragraph",
    text: "This is the content under the first heading. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec eros ut libero.",
  },
  { type: "image", src: extraImages[0], alt: "Extra Image 1" },
  { type: "heading", id: "second-heading", text: "Second Heading" },
  {
    type: "paragraph",
    text: "This is the content under the second heading. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  { type: "image", src: extraImages[1], alt: "Extra Image 2" },
  { type: "heading", id: "third-heading", text: "Third Heading" },
  {
    type: "paragraph",
    text: "This is the content under the third heading. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  { type: "image", src: extraImages[2], alt: "Extra Image 3" },
  {
    type: "paragraph",
    text: "This is the concluding paragraph of the blog post. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

for (let i = 1; i <= 60; i++) {
  blogData.push({
    id: i,
    title: `Blog Post ${i}`,
    slug: `blog-post-${i}`,
    author: i % 2 === 0 ? "Jane Smith" : "John Doe",
    image: baseImageUrl,
    createdDate: `2024-01-${i < 10 ? "0" + i : i}`, // Dates from 2024-01-01 to 2024-01-31
    tags: i % 2 === 0 ? ["Lifestyle", "Health"] : ["Tech", "News"],
    content: baseContent,
  });
}

fs.writeFile(
  "generatedBlogData.json",
  JSON.stringify(blogData, null, 2),
  (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File has been written successfully");
    }
  }
);
