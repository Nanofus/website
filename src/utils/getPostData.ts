import readingTime from "reading-time";

export default function getPostData(post: { slug: string; body: string }) {
	return {
		slug: post.slug,
		readingTime: readingTime(post.body).text,
	};
}
