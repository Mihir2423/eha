import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
const ProductDetail = dynamic(
  () => import("@/components/ProductComponents/ProductDetail"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const ProductDetails = ({ product }) => {
  console.log(product);
  return (
    <>
      <Head>
        <title>EHA | {product?.data.attributes?.name}</title>
        <meta name="description" content="Get all electronics products" />
      </Head>
      <ProductDetail product={product} />
    </>
  );
};

export default ProductDetails;

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;
    const res = await fetch(
      `http://localhost:1337/api/products/${id}?populate=*`
    );
    const product = await res.json();
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: {
        product: null,
      },
    };
  }
}
