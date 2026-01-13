interface PageParams {
  params: {
    stdId: string;
  };
}

export default function Student({ params }: PageParams) {
  // เอาข้อมูลที่ส่งมาเก็บในตัวแปรเพื่อใช้ใน Component
  const { stdId } = params;

  return (
    <>
      <h1 className="text-center font-bold">Welcome to SAU</h1>
      <h3>ID:{stdId}</h3>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        vitae natus magni fugiat. Nam, veritatis, adipisci quas tempore
        perferendis possimus quidem natus voluptatem vero iste nobis? Est eum
        nobis minima!
      </p>
    </>
  );
}
