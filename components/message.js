export default function Message({
  children,
  avatar,
  userName,
  description,
  timestamp,
}) {
  return (
    <div className=" p-10 rounded-sm my-10 bg-lavenderBg">
      <div className="">
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
