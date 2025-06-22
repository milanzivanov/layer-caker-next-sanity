import { PageBuilder } from "@/components/PageBuilder";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: page } = await sanityFetch({
    query: HOME_PAGE_QUERY
  });

  return page?.homePage?.content ? (
    <PageBuilder
      content={page?.homePage.content}
      documentId={page?.homePage._id}
      documentType={page?.homePage._type}
    />
  ) : null;
}

// import { Title } from "@/components/Title";
// import Link from "next/link";

// export default async function Page() {
//   return (
//     <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
//       <Title>Layer Caker Home Page</Title>
//       <hr />
//       <Link href="/posts">Posts index &rarr;</Link>
//     </section>
//   );
// }
