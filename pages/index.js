import Layout from "../components/Layout";
import fetchFromCMS from "../lib/services";
import Image from "next/image";
import Link from "next/link";

export default function Home({ blogItems }) {
   console.log(blogItems);
   return (
      <Layout>
         <div className="entries">
            <div className="row justify-content-start  ">
               {blogItems.map((item) => (
                  <div className="col-md-6" key={item?.id}>
                     <div className="entry mb-3">
                        <Link as={`/blogs/${item.slug}`} href="/blogs/[id]">
                           <div className="main-image">
                              <Image
                                 src={item?.image?.name}
                                 width={600}
                                 height={400}
                                 alt={item?.Headline}
                              />
                              <h3>{item?.Headline}</h3>
                           </div>
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Layout>
   );
}

export async function getStaticProps() {
   const blogItems = await fetchFromCMS("min-blogs");
   return {
      props: { blogItems },
      revalidate: 1,
   };
}
