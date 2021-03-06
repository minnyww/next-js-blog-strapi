import Layout from "../../components/Layout";
import fetchFromCMS from "../../lib/services";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
const BlogsItem = ({ blogs }) => {
   console.log("blogs : ", blogs);
   return (
      <Layout>
         <div className="row">
            <div className="portfolio-image text-center mb-4">
               <div className="col-md-12">
                  <Image
                     src={
                        blogs?.image?.name.includes("images.unsplash.com")
                           ? blogs.image.name
                           : `https://strapi-x39d.onrender.com/${blogs?.image?.url}`
                     }
                     width={1000}
                     height={500}
                  />
               </div>
            </div>
         </div>
         <div className="row">
            <div className="portfolio-content">
               <div className="col-md-12">
                  <div className="portfolio-headline text-center m-2">
                     <h1>{blogs?.Headline}</h1>
                  </div>
                  <ReactMarkdown source={blogs?.content} escapeHtml={false} />
               </div>
            </div>
         </div>
      </Layout>
   );
};
export default BlogsItem;

export async function getStaticProps({ params }) {
   const portfolio = await fetchFromCMS(`min-blogs?slug=${params.slug}`);
   return {
      props: { blogs: portfolio[0] },
      revalidate: 1,
   };
}

export async function getStaticPaths() {
   const portfolios = await fetchFromCMS("min-blogs");
   return {
      paths: portfolios.map((portfolio) => ({
         params: {
            slug: portfolio.slug,
         },
      })),
      fallback: false,
   };
}
