import HomePage from "@/components/HomePageComponents/HomePage";
import React, { useEffect } from "react";
import { getToken } from "@/redux/features/userSlice";
import { useDispatch } from "react-redux";
import Head from "next/head";
import { getSession } from "next-auth/react";
import Footer from "@/components/footer/footer";

const Home = ({ posts, filteredItems }) => {
  console.log(process.env.NEXT_PUBLIC_NEXT_API_PUBLIC_URL);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token && typeof token === "string") {
      dispatch(getToken(token));
    }
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>EHA Shivam Technologies | Dashboard</title>
        <meta name="description" content="Get all electronics products" />
      </Head>
      <HomePage posts={posts} laptops={filteredItems} />
    </>
  );
};

export default Home;

export async function getServerSideProps(context) {
  // const session = await getSession(context);
  // if (session == null) {
  //   return {
  //     redirect: {
  //       destination: "/auth/login",
  //       permanent: true,
  //     },
  //   };
  // }
  try {
    const [postsRes, filteredItemsRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_NEXT_API_PUBLIC_URL}/api/products?populate=*`),
      fetch(`${process.env.NEXT_PUBLIC_CLIENT_PUBLIC_URL}/api/products`),
    ]);

    const posts = await postsRes.json();
    const { filteredItems } = await filteredItemsRes.json();
    return {
      props: {
        posts,
        filteredItems,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        posts: [],
        filteredItems: [],
      },
    };
  }
}
