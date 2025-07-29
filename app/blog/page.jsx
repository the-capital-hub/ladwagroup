import Blogs from "@/components/Blog/Blog.jsx";

export const metadata = {
	title: "Blog | LADWA - Latest Industry Insights & News",
	description:
		"Stay updated with the latest insights, industry news, and expert knowledge about safety, technology, and innovation from LADWA.",
	keywords: "blog, industry news, safety, technology, innovation, LADWA",
};

const BlogPage = () => {
	return (
		<div className="min-h-screen">
			<Blogs />
		</div>
	);
};

export default BlogPage;
