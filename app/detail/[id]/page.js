import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";
import Comment from "./Comment";
import { notFound } from "next/navigation";

export default async function Detail(props) {
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  if (result === null) {
    return notFound();
  }

  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <img src={result.image} />
      <Comment id={props.params.id} />
    </div>
  );
}
