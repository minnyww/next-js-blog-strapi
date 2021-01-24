import fetchFromCMS from "../../lib/services";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";

const Blogs = ({ blogItems }) => {
   return (
      <Layout>
         <div className="row justify-content-start  ">
            {blogItems.map((item) => {
               return (
                  <div className="col-md-4" key={item?.id}>
                     <Link as={`/blogs/${item.slug}`} href="/blogs/[id]">
                        <div className="card">
                           <Image
                              src={
                                 item?.image?.name.includes(
                                    "images.unsplash.com",
                                 )
                                    ? item.image.name
                                    : `https://strapi-x39d.onrender.com/${item?.image?.url}`
                              }
                              width={600}
                              height={400}
                              alt={item?.Headline}
                           />

                           <div className="card-body">
                              <p className="card-text">
                                 Quick sample text to create the card title and
                                 make up the body of the card's content.
                              </p>
                           </div>
                        </div>
                     </Link>
                  </div>
               );
            })}
         </div>
      </Layout>
   );
};

export default Blogs;

export async function getStaticProps() {
   const blogItems = await fetchFromCMS("min-blogs");
   return {
      props: { blogItems },
      revalidate: 1,
   };
}
