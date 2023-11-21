import React from "react";
import { TickerNews } from "../../models";
import { Text } from "../Text";

interface NewCardProps {
  data: TickerNews;
}

function NewCard({ data }: NewCardProps) {
  return (
    <div
      style={{
        gap: 16,
        padding: 10,
        height: 100,
        width: "100%",
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
      }}
    >
      <img
        src={data.img}
        alt={data.title}
        style={{ height: "100%", width: "20%", objectFit: "contain" }}
      />

      <div style={{ display: "block" }}>
        <Text
          type="a"
          href={'https://' + data.link}
          target="_blank"
          style={{ fontWeight: 600, textDecoration: "none", color: "#1f263e" }}
        >
          {data?.title}
        </Text>
      </div>
      <br />
    </div>
  );
}

export { NewCard };
