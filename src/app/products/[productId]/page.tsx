export default function Products({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details about Product {params.productId}</h1>;
}
