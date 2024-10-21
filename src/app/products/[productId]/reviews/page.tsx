export default function ReviewList({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h1>This is Review list</h1>
      <h2>Review 1 for Product {params.productId}</h2>
      <h2>Review 2 for Product {params.productId}</h2>
      <h2>Review 3 for Product {params.productId}</h2>
      <h2>Review 4 for Product {params.productId}</h2>
    </>
  );
}
