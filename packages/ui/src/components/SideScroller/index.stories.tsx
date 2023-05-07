import { SideScroller } from ".";

export default {
  title: "SideScroller",
  component: SideScroller,
};

export const Default = () => {
  return (
    <div style={{ width: "100vw" }}>
      <SideScroller title="FEATURED KITS">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
          (i) => (
            <div
              style={{
                backgroundColor: "gray",
                height: "10rem",
                width: "10rem",
                marginRight: "1rem",
                color: "black",
              }}
              key={i}
            >
              {i}
            </div>
          ),
        )}
      </SideScroller>
    </div>
  );
};
