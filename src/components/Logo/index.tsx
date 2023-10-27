import { Text } from "../Text";
import "./styles.css";

function Logo() {
  return (
    <div className="logo-container">
      <svg
        width={42}
        height={42}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41 26.556c-1.111-.276-2.922-.286-4.444-.276-.51.003-.202-.018-.89 0-1.794.056-3.551.802-3.555 2.914-.004 2.251 2.222 2.917 4.445 2.917 2.222 0 4.444.514 4.444 2.917 0 1.806-1.794 2.597-4.03 2.859-1.779 0-2.637.057-4.859-.22m4.445 1.11V41m0-17.778v2.222M1 21h24.444M1 21c0 11.046 8.954 20 20 20M1 21C1 9.954 9.954 1 21 1m0 40c.751 0 1.493-.041 2.222-.122M21 41C4.901 23.4 14.292 7 21 1m0 0c8.708 0 16.116 5.565 18.862 13.333M21 1c2.978 2.663 6.484 7.376 8.055 13.333"
          stroke="url(#prefix__paint0_linear_280_185)"
          strokeWidth={2.01}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="prefix__paint0_linear_280_185"
            x1={21}
            y1={1}
            x2={21}
            y2={41}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2BB5EE" />
            <stop offset={0.579} stopColor="#2BB5EE" stopOpacity={0.6} />
            <stop offset={1} stopColor="#2BB5EE" stopOpacity={0.3} />
          </linearGradient>
        </defs>
      </svg>

      <Text className="logo-label">Finance</Text>
    </div>
  );
}

export { Logo };
