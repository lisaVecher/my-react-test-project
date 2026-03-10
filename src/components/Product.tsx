// src/components/Product.tsx

// export default function Product() {
//   return (
//     <div>
//       <h2>Tacos</h2>
//       <p>Price: 999 credits</p>
//     </div>
//   );
// }

// src/components/Product.tsx

// export default function Product(props) {
//   return (
//     <div>
//       <h2>Tacos</h2>
//       <p>Price: 9.99 credits</p>
//     </div>
//   );
// }

// src/components/Product.tsx

// interface ProductProps {
//   name: string;
// }

// export default function Product(props: ProductProps) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>Price: 999 credits</p>
//     </div>
//   );
// }

// src/components/Product.tsx

// src/components/Product.tsx

interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
}

export default function Product(props: ProductProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.imgUrl} alt={props.name} width="320" />
      <p>Price: {props.price} credits</p>
    </div>
  );
}
