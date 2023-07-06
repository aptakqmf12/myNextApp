export const metadata = {
  title: "data 페이지",
  description: "Generated by create next app",
};

export default function DataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="dataList">{children}</div>;
}
