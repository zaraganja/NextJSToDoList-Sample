
import fs from "fs";
import Head from 'next/head';
import Markdown from 'markdown-to-jsx';
import ReactMarkdown from "react-markdown";
import Link from 'next/link';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';






const page = async (prpos) => {
    console.log(prpos.params.slug);
    // const [renderedContent, setRenderedContent] = useState(prpos.params.slug);
    // const router = useRouter();
    // useEffect(() => {
    //     const fetchContent = async () => {
    //       const response = await fetch('/path/to/your/markdown/file.md');
    //       const markdown = await response.text();

    //       const processedContent = await remark().use(html).process(markdown);
    //       setRenderedContent(processedContent.toString());
    //     };

    //     if (router.asPath !== router.route) {
    //       fetchContent();
    //     }
    //   }, [router]);






    //in Next.js Cnsole.log comes in Terminal not inside inspect element goooooood!!!
    //this slug is the href of the Link in page.tsx
    const getPostContent = (slug) => {
        const folder = "posts/";
        const file = `${folder}${slug}.md`;
        const content = fs.readFileSync(file, "utf8");
        const matterResult = matter(content);
        return matterResult.content
    }
    const markdownContent = getPostContent(prpos.params.slug);
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(markdownContent);
    const contentHtml =  processedContent.toString();


    return (
        <>
            <head>
                <title>blog page</title>
            </head>

            <Link href="/">hello :{prpos.params.slug}</Link>
            <Markdown>{contentHtml}</Markdown>


        </>

    )
}

export default page