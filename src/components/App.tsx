// src/components/App.tsx

// import Alert from "./Alert";

// export default function App() {
//   return (
//     <>
//       <Alert />
//       <Alert type="success" />
//       <Alert type="error" />
//     </>
//   );
// }

// src/components/App.tsx

// import Button from "./Button";

// export default function App() {
//   return (
//     <>
//       <Button variant="primary" text="Login" />
//       <Button variant="secondary" text="Follow" />
//     </>
//   );
// }

// import UserMenu from "./UserMenu";

// export default function App() {
//   return (
//     <div>
//       <UserMenu name="Elizabeth" />
//     </div>
//   );
// }

// src/components/App.tsx

// export default function App() {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log("Clicked!", event);
//     console.log("Target:", event.target); // сам <button>
//   };

//   return <button onClick={handleClick}>Click me!</button>;
// }

// src/App.tsx

import { useState } from "react";

interface Values {
  x: number;
  y: number;
}

export default function App() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0 });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>
      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </div>
  );
}

// src/App.tsx

// src/components/App.tsx

// import Product from "./Product";

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>

//       <Product />
//       <Product />
//       <Product />
//     </>
//   );
// }

// src/components/App.tsx

// import Product from "./Product";

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>
//       <Product name="Tacos With Lime" />
//       <Product name="Fries and Burger" />
//     </>
//   );
// }

// src/components/App.tsx

// import Product from "./Product";

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
//         price={14.29}
//       />
//     </>
//   );
// }

// function Product() {
//   return (
//     <div>
//       <h2>Cookies</h2>
//       <p>Price: 999 credits</p>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <h1>Products</h1>

//       <Product />
//       <Product />
//       <Product />
//     </>
//   );
// }

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
