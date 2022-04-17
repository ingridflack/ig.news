import { GetStaticProps } from "next";
import Head from "next/head";
import { createClient } from "../../services/prismic";
import styles from "./styles.module.scss";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updated_at: string;
};

export interface Posts {
  posts: Post[];
}

const Posts = ({ posts }: Posts) => {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>30 de março de 2022</time>
            <strong>Creating a Monorepo with Learna</strong>
            <p>
              In this guide, you will leanr how to create a Monorepo to manage
              multiple packages with a shared build, test, and release proccess.
            </p>
          </a>
          <a href="#">
            <time>30 de março de 2022</time>
            <strong>Creating a Monorepo with Learna</strong>
            <p>
              In this guide, you will leanr how to create a Monorepo to manage
              multiple packages with a shared build, test, and release proccess.
            </p>
          </a>
          <a href="#">
            <time>30 de março de 2022</time>
            <strong>Creating a Monorepo with Learna</strong>
            <p>
              In this guide, you will leanr how to create a Monorepo to manage
              multiple packages with a shared build, test, and release proccess.
            </p>
          </a>
        </div>
      </main>
    </>
  );
};

// Revisar

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  console.log(previewData);

  const response = await client.getAllByType("posts", {
    pageSize: 100,
  });

  console.log({ response });

  const posts = response?.map((post: any) => {
    return {
      slug: post.uid,
      title: post.data.title,
      excerpt: post.data.content.find(
        (content: any) => content.type === "paragraph"
      )?.text,
      updated_at: new Date(post.last_publication_date).toLocaleDateString(
        "pt-PT",
        {
          year: "numeric",
          month: "long",
          day: "2-digit",
        }
      ),
    };
  });

  console.log(posts);
  return {
    props: { posts },
  };
};

export default Posts;
